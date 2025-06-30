"""Utility to replace affiliate placeholder URLs in markdown files."""

from __future__ import annotations

import csv
from pathlib import Path

CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
AFFILIATE_CSV = Path(__file__).resolve().parents[1] / "affiliates.csv"


def load_affiliates() -> dict:
    with AFFILIATE_CSV.open() as f:
        reader = csv.DictReader(f)
        return {row["product_name"]: row for row in reader}


def replace_urls(text: str, affiliates: dict) -> str:
    for name, urls in affiliates.items():
        text = text.replace(f"{{{{amazon:{name}}}}}", urls["amazon_url"])
        text = text.replace(f"{{{{chewy:{name}}}}}", urls["chewy_url"])
        text = text.replace(f"{{{{direct:{name}}}}}", urls["direct_url"])
    return text


def main() -> None:
    affiliates = load_affiliates()
    for md_file in CONTENT_DIR.glob("*.md"):
        text = md_file.read_text()
        new_text = replace_urls(text, affiliates)
        md_file.write_text(new_text)
        print(f"Updated affiliate links in {md_file}")


if __name__ == "__main__":
    main()
