"""Analytics monitoring script for CatData AI."""

from __future__ import annotations

import csv
import os
from pathlib import Path
from typing import List

import requests
import logging
import sys

REPORTS_DIR = Path(__file__).resolve().parents[1] / "reports"
try:
    REPORTS_DIR.mkdir(exist_ok=True)
except Exception as e:
    logging.error("Failed to create reports directory: %s", e)
    sys.exit(1)
SUMMARY_FILE = REPORTS_DIR / "summary.csv"

ANALYTICS_API_URL = os.getenv(
    "ANALYTICS_API_URL", "https://analytics.example.com/api/summary"
)
API_KEY = os.getenv("ANALYTICS_API_KEY", "")

logging.basicConfig(level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s")


def fetch_summary() -> List[dict]:
    headers = {"Authorization": f"Bearer {API_KEY}"}
    try:
        resp = requests.get(ANALYTICS_API_URL, headers=headers, timeout=10)
        resp.raise_for_status()
        return resp.json()
    except Exception:
        return []


def write_summary(rows: List[dict]) -> bool:
    fieldnames = ["date", "clicks", "revenue"]
    exists = SUMMARY_FILE.exists()
    try:
        with SUMMARY_FILE.open("a", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            if not exists:
                writer.writeheader()
            for row in rows:
                writer.writerow(row)
        return True
    except Exception as e:
        logging.error("Failed to write summary file: %s", e)
        return False


def main() -> None:
    data = fetch_summary()
    if not data:
        print("No analytics data fetched")
        return
    if not write_summary(data):
        sys.exit(1)
    print(f"Appended analytics summary to {SUMMARY_FILE}")


if __name__ == "__main__":
    main()
