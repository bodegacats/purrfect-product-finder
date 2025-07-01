"""Publish generated content to Lovable CMS."""

from __future__ import annotations

import os
import sys
from datetime import datetime
from pathlib import Path

import logging
import requests

CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
CMS_API_URL = os.getenv("CMS_API_URL", "https://cms.example.com/api/pages")
CMS_API_KEY = os.getenv("CMS_API_KEY", "")


logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")


def publish_page(title: str, body: str) -> bool:
    """Create or update a page via Lovable CMS API."""
    if not body.startswith(DISCLOSURE_LINE):
        body = f"{DISCLOSURE_LINE}\n\n{body}"
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
        return True
    except Exception as e:
        logging.error("Failed to publish %s: %s", title, e)
        return False


def main() -> None:
    success = True
    for md_file in CONTENT_DIR.glob("*.md"):
        title = md_file.stem.replace("_", " ").title()
        body = md_file.read_text()
        if not publish_page(title, body):
            success = False
    if not success:
        sys.exit(1)


if __name__ == "__main__":
    main()
