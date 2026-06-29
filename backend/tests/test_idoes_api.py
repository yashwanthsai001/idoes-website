"""Regression tests for IDOES backend after package.json dependency overhaul."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://idoes-preview.preview.emergentagent.com').rstrip('/')


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health check
def test_api_root(api_client):
    r = api_client.get(f"{BASE_URL}/api/", timeout=30)
    assert r.status_code == 200
    data = r.json()
    assert data.get("message") == "IDOES API"
    assert data.get("status") == "ok"


# Roast endpoint - happy path
def test_roast_stripe(api_client):
    r = api_client.post(f"{BASE_URL}/api/roast", json={"url": "stripe.com"}, timeout=120)
    assert r.status_code == 200, f"got {r.status_code}: {r.text[:300]}"
    data = r.json()
    assert "id" in data and isinstance(data["id"], str)
    assert "score" in data and isinstance(data["score"], int)
    assert 0 <= data["score"] <= 100
    assert isinstance(data.get("verdict"), str) and len(data["verdict"]) > 0
    assert isinstance(data.get("roast"), str) and len(data["roast"]) > 0
    cats = data.get("categories")
    assert isinstance(cats, list) and len(cats) == 8
    expected_ids = {
        "ux-usability", "visual-hierarchy", "mobile-responsiveness",
        "performance", "conversion-optimization", "branding-trust",
        "accessibility", "overall-verdict"
    }
    got_ids = {c["id"] for c in cats}
    assert expected_ids == got_ids
    for c in cats:
        assert c["severity"] in ("critical", "warning", "good")
        for k in ("label", "icon", "headline", "advice"):
            assert isinstance(c.get(k), str) and len(c[k]) > 0


# Roast endpoint - bad input
def test_roast_empty_url(api_client):
    r = api_client.post(f"{BASE_URL}/api/roast", json={"url": ""}, timeout=30)
    assert r.status_code == 400
    assert "URL is required" in r.text


# Leads endpoint
def test_create_lead(api_client):
    payload = {"name": "TEST_user", "email": "test@example.com", "message": "regression", "source": "test"}
    r = api_client.post(f"{BASE_URL}/api/leads", json=payload, timeout=30)
    assert r.status_code == 200
    data = r.json()
    assert data.get("ok") is True
    assert isinstance(data.get("id"), str)


# Status CRUD
def test_status_create_and_list(api_client):
    r = api_client.post(f"{BASE_URL}/api/status", json={"client_name": "TEST_regression"}, timeout=30)
    assert r.status_code == 200
    created = r.json()
    assert created["client_name"] == "TEST_regression"
    assert "id" in created

    r2 = api_client.get(f"{BASE_URL}/api/status", timeout=30)
    assert r2.status_code == 200
    rows = r2.json()
    assert isinstance(rows, list)
    assert any(row.get("id") == created["id"] for row in rows)
