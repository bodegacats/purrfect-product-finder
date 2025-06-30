"""Rating computation for CatData AI project."""

from __future__ import annotations

import json
from pathlib import Path
from typing import List, Dict

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
RAW_RATINGS_FILE = DATA_DIR / "ratings_raw.json"
RATINGS_FILE = DATA_DIR / "ratings.json"

WEIGHTS = {
    "durability": 0.3,
    "safety": 0.25,
    "value": 0.25,
    "convenience": 0.2,
}


def compute_lives_rating(entry: Dict[str, float]) -> float:
    """Compute weighted lives rating on a scale of 1-9."""
    score = sum(entry.get(k, 0) * w for k, w in WEIGHTS.items())
    # Normalize from 0-5 scale to 1-9
    return max(1.0, min(9.0, score / 5 * 8 + 1))


def process_ratings(raw_data: Dict[str, List[Dict[str, float]]]) -> Dict[str, List[Dict[str, float]]]:
    """Add ``lives_rating`` to each rating entry."""
    result = {}
    for topic, entries in raw_data.items():
        result[topic] = []
        for entry in entries:
            entry_with_rating = dict(entry)
            entry_with_rating["lives_rating"] = compute_lives_rating(entry)
            result[topic].append(entry_with_rating)
    return result


def main() -> None:
    """Read RAW_RATINGS_FILE and write RATINGS_FILE with lives_rating."""
    data = json.loads(RAW_RATINGS_FILE.read_text())
    processed = process_ratings(data["ratings"])
    RATINGS_FILE.write_text(
        json.dumps({"generated": data.get("generated"), "ratings": processed}, indent=2)
    )
    print(f"Wrote processed ratings to {RATINGS_FILE}")


if __name__ == "__main__":
    main()
