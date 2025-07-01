"""Data ingestion module for CatData AI project.

Pulls rating data from a Google Sheet (published as CSV) and saves it to
``data/ratings_raw.json``. The sheet URL is provided via the ``SHEET_CSV_URL``
environment variable. If the HTTP request fails, data from the local
``affiliates.csv`` file is used instead.
"""

from __future__ import annotations

import json
import os
import csv
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List

import logging
import requests

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
DATA_DIR.mkdir(exist_ok=True)
RAW_RATINGS_FILE = DATA_DIR / "ratings_raw.json"

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")

TOPICS = [
    "food",
    "toys",
    "health",
    "training",
    "grooming",
    "behavior",
]

# Google sheet published as CSV that contains ratings data
SHEET_CSV_URL = os.getenv("SHEET_CSV_URL", "")

# Local fallback CSV if the network request fails
LOCAL_CSV = Path(__file__).resolve().parents[1] / "affiliates.csv"


def fetch_csv() -> str:
    """Return CSV text from the Google Sheet or the local fallback."""
    if SHEET_CSV_URL:
        try:
            resp = requests.get(SHEET_CSV_URL, timeout=10)
            resp.raise_for_status()
            return resp.text
        except Exception as e:
            logging.error("Failed to fetch sheet CSV: %s", e)
    try:
        return LOCAL_CSV.read_text()
    except Exception as e:
        logging.error("Failed to read fallback CSV: %s", e)
        return ""


def parse_csv(text: str) -> Dict[str, List[Dict[str, float]]]:
    """Parse CSV text into the ratings structure expected downstream."""
    result = {topic: [] for topic in TOPICS}
    reader = csv.DictReader(text.splitlines())
    for row in reader:
        topic = row.get("topic", "").strip().lower()
        if topic not in result:
            continue
        try:
            result[topic].append(
                {
                    "durability": float(row.get("durability", 0)),
                    "safety": float(row.get("safety", 0)),
                    "value": float(row.get("value", 0)),
                    "convenience": float(row.get("convenience", 0)),
                }
            )
        except ValueError:
            logging.error("Invalid numeric value in row: %s", row)
    return result


def main() -> None:
    """Fetch rating CSV and save to ``RAW_RATINGS_FILE``."""
    csv_text = fetch_csv()
    if not csv_text:
        logging.error("No rating data available")
        sys.exit(1)
    all_ratings = parse_csv(csv_text)
    try:
        RAW_RATINGS_FILE.write_text(
            json.dumps(
                {"generated": datetime.utcnow().isoformat(), "ratings": all_ratings},
                indent=2,
            )
        )
        print(f"Wrote raw ratings to {RAW_RATINGS_FILE}")
    except Exception as e:
        logging.error("Failed to write ratings file: %s", e)
        sys.exit(1)


if __name__ == "__main__":
    main()
