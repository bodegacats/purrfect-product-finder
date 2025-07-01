# Purrfect Product Finder

## Project Overview

This repository contains the code for **Purrfect Product Finder**, a small web application and data pipeline that recommends cat products. The frontend is built with Vite and React while all product research is automated through Python scripts under `catdata-pipeline`.

The pipeline runs each week through the `CatData Pipeline Schedule` GitHub Action. Data is pulled from a Google Sheet or local CSV, ratings are computed, content is generated with OpenAI, affiliate links are inserted and articles are published to the CMS. Analytics results are appended to `reports/summary.csv` for later review.

High level flow:

```
Google Sheet/CSV → data_ingest.py → rating.py → content_gen.py → affiliates.py → cms_publish.py → analytics_monitor.py
```

## Scripts

| Script | Description |
| --- | --- |
| `catdata-pipeline/data_ingest/data_ingest.py` | Download rating data from the sheet or CSV into `data/ratings_raw.json`. |
| `catdata-pipeline/rating/rating.py` | Calculate a `lives_rating` for each product and store the result in `data/ratings.json`. |
| `catdata-pipeline/content_gen/content_gen.py` | Use OpenAI to generate markdown articles from the rating data. |
| `catdata-pipeline/utils/affiliates.py` | Replace affiliate placeholders in the generated markdown using `affiliates.csv`. |
| `catdata-pipeline/cms_publish/cms_publish.py` | Publish the generated articles to the CMS. |
| `catdata-pipeline/analytics_monitor/analytics_monitor.py` | Fetch analytics metrics and append them to `reports/summary.csv`. |
| `fetch_images.py` | Scrape product image URLs and store them in `affiliates.csv`. |
| `merge_and_run.sh` | Merge the `pipeline` branch into `main` and trigger the pipeline workflow on GitHub. |
| `restructure_workflow.sh` | Move the workflow file to `.github/workflows`. |
| `enable_manual_run.sh` | Add a `workflow_dispatch` trigger to the GitHub Actions workflow. |

## Required Environment Variables

The following variables must be available when running the pipeline locally or in CI:

- `SHEET_CSV_URL` – Public CSV export link of the Google Sheet containing product information.
- `OPENAI_API_KEY` – API key for generating articles in `content_gen.py`.
- `CMS_API_KEY` – Token used by `cms_publish.py` to publish pages.
- `ANALYTICS_API_KEY` – Token for the analytics API queried in `analytics_monitor.py`.

## Adding or Updating Products

Products and their affiliate links live in `catdata-pipeline/affiliates.csv`. You can edit this file directly or maintain a Google Sheet and export it as CSV:

1. Update or add rows in the Google Sheet.
2. Obtain the sheet's public CSV URL and set `SHEET_CSV_URL`.
3. Run `python catdata-pipeline/data_ingest/data_ingest.py` to pull the latest data which updates `affiliates.csv`.

Alternatively, edit `affiliates.csv` by hand and commit the changes.

## Running Locally

Install Python dependencies from `catdata-pipeline/requirements.txt` and run the modules in order:

```sh
pip install -r catdata-pipeline/requirements.txt
python catdata-pipeline/data_ingest/data_ingest.py
python catdata-pipeline/rating/rating.py
python catdata-pipeline/content_gen/content_gen.py
python catdata-pipeline/utils/affiliates.py
python catdata-pipeline/cms_publish/cms_publish.py
python catdata-pipeline/analytics_monitor/analytics_monitor.py
```

To trigger the same process on GitHub Actions manually, use:

```sh
./merge_and_run.sh
```

This merges the `pipeline` branch into `main` and starts the **CatData Pipeline Schedule** workflow.

## Understanding `reports/summary.csv`

Each run of `analytics_monitor.py` appends a row to `reports/summary.csv` with the columns `date`, `clicks` and `revenue`. The file aggregates daily metrics so you can track performance over time:

```
date,clicks,revenue
2024-06-01,120,450.50
2024-06-02,150,560.75
2024-06-03,90,300.00
```

Use a spreadsheet to plot these values or process them with another analytics tool.
