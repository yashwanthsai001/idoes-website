# IDOES — Self-Hosting Guide

A React (CRA + craco) frontend and FastAPI backend for the IDOES creative agency website.

## Requirements
- Node.js **20.x** (tested on `v20.20.2`)
- Python **3.11+** (for backend only)
- npm **10.x** (ships with Node 20)
- MongoDB (optional, only needed for backend persistence of roasts/leads)

## Frontend — build & deploy

```bash
cd frontend
npm install         # installs all deps, resolves React 19 peer deps via .npmrc
npm run build       # outputs production bundle to ./build
```

Upload the entire contents of `frontend/build/` to your Hostinger `public_html` folder.

### Env vars (`frontend/.env`)
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```
If you skip the backend entirely (no roast tool), set this to any URL — the rest of the site works without it.

## Backend — build & deploy (optional, only for Roast tool)

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001
```

### Env vars (`backend/.env`)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=idoes
CORS_ORIGINS=https://your-frontend-domain.com
EMERGENT_LLM_KEY=<replace with your own Anthropic API key, or migrate to direct Anthropic SDK>
```

> ⚠️ `EMERGENT_LLM_KEY` only works inside Emergent. Off-platform, replace it with your own Anthropic key and switch `emergentintegrations.llm.chat.LlmChat` to the official `anthropic` SDK.

## Dependency notes (already fixed)

The following issues were resolved in `package.json`:
- `react-day-picker` bumped to `^9.4.0` (compatible with `date-fns ^4.1.0` and React 19)
- `axios` corrected to `^1.7.7` (1.16.0 doesn't exist)
- `lodash` corrected to `^4.17.21` (4.18.1 doesn't exist)
- `ajv@^8.12.0` added as a direct devDependency to fix the classic `ajv/dist/compile/codegen` resolver error
- `@emergentbase/visual-edits` (Emergent-only URL dep) removed
- `cra-template` (scaffold-time only) removed
- `.npmrc` adds `legacy-peer-deps=true` so React 19 peer deps from older packages resolve cleanly

## Hosting recommendations

| Layer | Recommended host | Cost |
|---|---|---|
| Frontend static build | Hostinger shared / Netlify / Vercel | Included in Hostinger |
| Backend (FastAPI) | Render free / Railway / Fly.io / Hostinger VPS | Free tier OK |
| Database | MongoDB Atlas free tier (512 MB) | Free |

After deploying the backend, update `frontend/.env`'s `REACT_APP_BACKEND_URL`, then rebuild and re-upload `frontend/build/`.
