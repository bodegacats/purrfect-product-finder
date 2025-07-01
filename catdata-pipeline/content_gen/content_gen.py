"""Content generation using OpenAI API."""

from __future__ import annotations

import json
import os
from pathlib import Path
from typing import Dict
import logging
import sys

import openai

DISCLOSURE_LINE = "As an Amazon Associate I earn from qualifying purchases."


def add_disclosure(text: str) -> str:
    """Wrap text with the disclosure line at the top and bottom."""
    lines = [DISCLOSURE_LINE, "", text.strip(), "", DISCLOSURE_LINE]
    return "\n".join(lines)

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
try:
    CONTENT_DIR.mkdir(exist_ok=True)
except Exception as e:
    logging.error("Failed to create content directory: %s", e)
    sys.exit(1)
RATINGS_FILE = DATA_DIR / "ratings.json"

DISCLOSURE_LINE = (
    "FTC disclosure: This article contains affiliate links and we may earn"
    " a commission on qualifying purchases."
)

logging.basicConfig(
    level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s"
)

ARTICLE_PROMPT_TEMPLATE = (
    "Write a 500 word article about {topic} for cat owners. Use rating data: {data}."
)

openai.api_key = os.getenv("OPENAI_API_KEY", "")

# FTC disclosure automatically inserted at the beginning of every article
DISCLOSURE_LINE = (
    "FTC Disclosure: This post contains affiliate links. "
    "If you make a purchase, we may earn a commission."
)


def generate_article(topic: str, rating_data: Dict) -> str:
    """Generate article content via OpenAI ChatCompletion."""
    prompt = ARTICLE_PROMPT_TEMPLATE.format(
        topic=topic, data=json.dumps(rating_data)
    )
    try:
        resp = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
        )
        content = resp.choices[0].message["content"]
        return f"{DISCLOSURE_LINE}\n\n{content}"
    except Exception as e:
        logging.error("Error generating article for %s: %s", topic, e)
        return f"Error generating article for {topic}: {e}"

    content = resp.choices[0].message["content"]
    return add_disclosure(content)


def main() -> None:
    try:
        data = json.loads(RATINGS_FILE.read_text())["ratings"]
    except Exception as e:
        logging.error("Failed to read ratings file: %s", e)
        sys.exit(1)
    for topic, entries in data.items():
        content = generate_article(topic, entries)
        md_path = CONTENT_DIR / f"{topic}.md"
        try:
            md_path.write_text(content)
            print(f"Wrote {md_path}")
        except Exception as e:
            logging.error("Failed to write %s: %s", md_path, e)
            sys.exit(1)


if __name__ == "__main__":
    main()
