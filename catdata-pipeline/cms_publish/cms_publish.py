"""Publish generated content to Lovable CMS."""

from __future__ import annotations

import json
import os
from datetime import datetime
from pathlib import Path

import requests

CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
CMS_API_URL = os.getenv("CMS_API_URL", "https://cms.example.com/api/pages")
CMS_API_KEY = os.getenv("CMS_API_KEY", "")


def publish_page(title: str, body: str) -> None:
    """Create or update a page via Lovable CMS API."""
    payload = {
        "title": title,
        "body": body,
        "meta_description": f"Article about {title}",
        "publish_date": datetime.utcnow().isoformat(),
    }
    headers = {"Authorization": f"Bearer {CMS_API_KEY}"}
    try:
        resp = requests.post(CMS_API_URL, json=payload, headers=headers, timeout=10)
        resp.raise_for_status()
        print(f"Published {title}")
    except Exception as e:
        print(f"Failed to publish {title}: {e}")


def main() -> None:
    for md_file in CONTENT_DIR.glob("*.md"):
        title = md_file.stem.replace("_", " ").title()
        body = md_file.read_text()
        publish_page(title, body)


if __name__ == "__main__":
    main()
