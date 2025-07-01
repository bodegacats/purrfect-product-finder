"""Generate markdown articles summarizing top products."""

from __future__ import annotations

import json
import logging
import os
import sys
from pathlib import Path
from typing import Dict, List

import openai


DISCLOSURE_LINE = "As an Amazon Associate I earn from qualifying purchases."


def add_disclosure(text: str) -> str:
    """Prepend and append the disclosure line to ``text``."""
    text = text.strip()
    return f"{DISCLOSURE_LINE}\n{text}\n{DISCLOSURE_LINE}"


DATA_DIR = Path(__file__).resolve().parents[1] / "data"
CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
RATINGS_FILE = DATA_DIR / "ratings.json"


logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")


try:
    CONTENT_DIR.mkdir(exist_ok=True)
except Exception as e:  # pragma: no cover - filesystem failure
    logging.error("Failed to create content directory: %s", e)
    sys.exit(1)


openai.api_key = os.getenv("OPENAI_API_KEY", "")


TOP_X_PROMPT_TEMPLATE = (
    "Write a markdown article titled 'Top {count} {topic}' for cat owners. "
    "Use the following rating data to rank the products:\n{data}\n"
    "Only return markdown."
)


def generate_article(topic: str, rating_data: List[Dict]) -> str:
    """Generate an article via the OpenAI API."""
    count = len(rating_data)
    prompt = TOP_X_PROMPT_TEMPLATE.format(
        topic=topic,
        count=count,
        data=json.dumps(rating_data),
    )
    try:
        resp = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
        )
        content = resp.choices[0].message["content"]
    except Exception as e:  # pragma: no cover - network failure
        logging.error("Error generating article for %s: %s", topic, e)
        raise

    return add_disclosure(content)


def main() -> None:
    try:
        ratings = json.loads(RATINGS_FILE.read_text())["ratings"]
    except Exception as e:
        logging.error("Failed to read ratings file %s: %s", RATINGS_FILE, e)
        sys.exit(1)

    for topic, entries in ratings.items():
        logging.info("Generating article for %s", topic)
        try:
            article_md = generate_article(topic, entries)
        except Exception:
            continue

        md_path = CONTENT_DIR / f"{topic}.md"
        try:
            md_path.write_text(article_md)
            print(f"Wrote {md_path}")
        except Exception as e:  # pragma: no cover - filesystem failure
            logging.error("Failed to write %s: %s", md_path, e)


if __name__ == "__main__":
    main()

