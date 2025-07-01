"""Content generation using OpenAI API."""

from __future__ import annotations

import json
import os
from pathlib import Path
from typing import Dict
import logging

import openai

DISCLOSURE_LINE = "As an Amazon Associate I earn from qualifying purchases."

DATA_DIR = Path(__file__).resolve().parents[1] / "data"
CONTENT_DIR = Path(__file__).resolve().parents[1] / "content"
CONTENT_DIR.mkdir(exist_ok=True)
RATINGS_FILE = DATA_DIR / "ratings.json"

logging.basicConfig(
    level=logging.ERROR, format="%(asctime)s %(levelname)s %(message)s"
)

ARTICLE_PROMPT_TEMPLATE = (
    "Write a 500 word article about {topic} for cat owners. Use rating data: {data}."
)

openai.api_key = os.getenv("OPENAI_API_KEY", "")


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
    except Exception as e:
        logging.error("Error generating article for %s: %s", topic, e)
        return f"Error generating article for {topic}: {e}"

    content = resp.choices[0].message["content"]
    return f"{DISCLOSURE_LINE}\n\n{content}\n\n{DISCLOSURE_LINE}"


def main() -> None:
    data = json.loads(RATINGS_FILE.read_text())["ratings"]
    for topic, entries in data.items():
        content = generate_article(topic, entries)
        md_path = CONTENT_DIR / f"{topic}.md"
        md_path.write_text(content)
        print(f"Wrote {md_path}")


if __name__ == "__main__":
    main()
