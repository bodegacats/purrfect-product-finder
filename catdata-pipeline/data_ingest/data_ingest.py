"""Data ingestion module for CatData AI project.

Fetches affiliate product information from a Google Sheet CSV or a local
fallback and stores it in ``data/ratings_raw.json``.
"""

from __future__ import annotations

import json
import os
import csv
import io
import sys
from datetime import datetime
from pathlib import Path
from typing import List, Dict

import logging
import requests

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
DATA_DIR.mkdir(exist_ok=True)
RAW_RATINGS_FILE = DATA_DIR / "ratings_raw.json"
AFFILIATE_CSV = Path(__file__).resolve().parents[1] / "affiliates.csv"

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")


def load_csv_rows() -> List[Dict[str, str]]:
    """Load affiliate rows from Google Sheets or local CSV."""
    sheet_url = os.getenv("SHEET_CSV_URL")
    if sheet_url:
        try:
            resp = requests.get(sheet_url, timeout=10)
            resp.raise_for_status()
            return list(csv.DictReader(io.StringIO(resp.text)))
        except Exception as e:
            logging.error("Failed to download sheet CSV: %s", e)

    try:
        with AFFILIATE_CSV.open() as f:
            return list(csv.DictReader(f))
    except Exception as e:
        logging.error("Failed to read local CSV: %s", e)
        return []


def main() -> None:
    """Load affiliate data and save to ``RAW_RATINGS_FILE``."""
    rows = load_csv_rows()
    all_ratings: List[Dict[str, str]] = []
    for row in rows:
        all_ratings.append(
            {
                "product_name": row.get("product_name", ""),
                "amazon_url": row.get("amazon_url", ""),
                "chewy_url": row.get("chewy_url", ""),
                "direct_url": row.get("direct_url", ""),
                "image_url": row.get("image_url", ""),
            }
        )

    try:
        RAW_RATINGS_FILE.write_text(
            json.dumps(
                {
                    "generated": datetime.utcnow().isoformat(),
                    "ratings": all_ratings,
                },
                indent=2,
            )
        )
        print(f"Wrote raw ratings to {RAW_RATINGS_FILE}")
    except Exception as e:
        logging.error("Failed to write ratings file: %s", e)
        sys.exit(1)


if __name__ == "__main__":
    main()
