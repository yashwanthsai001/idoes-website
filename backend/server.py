from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import json
import re
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone

from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')

app = FastAPI(title="IDOES API")
api_router = APIRouter(prefix="/api")


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class RoastRequest(BaseModel):
    url: str


class RoastCategory(BaseModel):
    id: str
    label: str
    icon: str
    headline: str
    advice: str
    severity: str  # critical | warning | good


class RoastResponse(BaseModel):
    id: str
    url: str
    score: int
    verdict: str
    roast: str
    categories: List[RoastCategory]
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class LeadCreate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    message: Optional[str] = None
    source: Optional[str] = "contact"


ROAST_SYSTEM = """You are a brutally honest but constructive senior UX/UI designer and web strategist at IDOES, a premium creative agency. You critique websites with sharp wit, professional standards, and actionable depth.

Analyze the given website URL based on what such a site is likely to contain (use the domain name, industry signals, and common patterns for similar sites). Return ONLY a single valid JSON object — no markdown fences, no preamble, no trailing text.

Required JSON shape:
{
  "score": <integer 0-100>,
  "verdict": "<one sharp sentence summarising the site>",
  "roast": "<2-3 punchy but professional sentences>",
  "categories": [
    {
      "id": "ux-usability",
      "label": "UX & USABILITY",
      "icon": "<single relevant emoji>",
      "headline": "<one sharp sentence roast>",
      "advice": "<2-3 sentences of concrete improvement>",
      "severity": "critical" | "warning" | "good"
    },
    ... exactly 8 categories total ...
  ]
}

Use these 8 category labels in this exact order with these ids:
1. id=ux-usability, label=UX & USABILITY
2. id=visual-hierarchy, label=VISUAL HIERARCHY
3. id=mobile-responsiveness, label=MOBILE RESPONSIVENESS
4. id=performance, label=PERFORMANCE
5. id=conversion-optimization, label=CONVERSION OPTIMIZATION
6. id=branding-trust, label=BRANDING & TRUST
7. id=accessibility, label=ACCESSIBILITY
8. id=overall-verdict, label=OVERALL VERDICT

Rules:
- score is an integer 0-100. Be honest. Average sites score 55-72.
- Severity must reflect impact: "critical" for serious issues, "warning" for moderate, "good" for strengths.
- icon must be a single emoji character.
- Voice: bold, direct, slightly rebellious. Zero corporate fluff. Like a senior designer reviewing in Slack.
- Return ONLY the JSON object."""


def _extract_json(text: str) -> dict:
    text = text.strip()
    # Strip code fences if present
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```$", "", text)
    # Find the first { ... last }
    start = text.find("{")
    end = text.rfind("}")
    if start != -1 and end != -1 and end > start:
        text = text[start:end + 1]
    return json.loads(text)


@api_router.get("/")
async def root():
    return {"message": "IDOES API", "status": "ok"}


@api_router.post("/roast", response_model=RoastResponse)
async def roast_website(req: RoastRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="LLM key not configured")

    url = (req.url or "").strip()
    if not url:
        raise HTTPException(status_code=400, detail="URL is required")
    if not re.match(r"^https?://", url, re.IGNORECASE):
        url = "https://" + url

    session_id = f"roast-{uuid.uuid4()}"
    chat = LlmChat(
        api_key=EMERGENT_LLM_KEY,
        session_id=session_id,
        system_message=ROAST_SYSTEM,
    ).with_model("anthropic", "claude-sonnet-4-5-20250929").with_params(max_tokens=2500)

    user_msg = UserMessage(
        text=(
            f"Roast this website: {url}\n\n"
            "Return ONLY the JSON object as specified. No markdown, no commentary."
        )
    )

    try:
        raw = await chat.send_message(user_msg)
    except Exception as e:
        logger.exception("LLM call failed")
        raise HTTPException(status_code=502, detail=f"LLM call failed: {e}")

    raw_text = raw if isinstance(raw, str) else getattr(raw, "content", str(raw))

    try:
        data = _extract_json(raw_text)
    except Exception as e:
        logger.error(f"Failed to parse JSON. Raw: {raw_text[:500]}")
        raise HTTPException(status_code=502, detail=f"Invalid JSON from model: {e}")

    # Validate categories
    cats = data.get("categories", []) or []
    if len(cats) < 8:
        raise HTTPException(status_code=502, detail="Incomplete categories from model")

    # Normalise severity
    for c in cats:
        sev = (c.get("severity") or "warning").lower()
        if sev not in ("critical", "warning", "good"):
            sev = "warning"
        c["severity"] = sev

    response_obj = RoastResponse(
        id=str(uuid.uuid4()),
        url=url,
        score=int(data.get("score", 0)),
        verdict=str(data.get("verdict", "")),
        roast=str(data.get("roast", "")),
        categories=[RoastCategory(**c) for c in cats[:8]],
    )

    # Persist
    doc = response_obj.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    try:
        await db.roasts.insert_one(doc)
    except Exception:
        logger.exception("Failed to persist roast")

    return response_obj


@api_router.post("/leads")
async def create_lead(lead: LeadCreate):
    doc = lead.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.leads.insert_one(doc)
    return {"id": doc["id"], "ok": True}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
