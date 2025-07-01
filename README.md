# Purrfect Product Finder

Purrfect Product Finder is an automated pipeline for generating and publishing cat product recommendations. Ratings are ingested from a Google Sheet, processed into an overall `lives_rating`, and used to create articles that are pushed to the CMS. A simple analytics monitor tracks clicks and revenue for published pages.

## Pipeline Scripts

| Script | Purpose |
|-------|---------|
|`data_ingest.py`|Download the latest ratings CSV from `SHEET_CSV_URL` and store it as `data/ratings_raw.json`.|
|`rating.py`|Compute the weighted `lives_rating` for each product and output `data/ratings.json`.|
|`content_gen.py`|Use OpenAI to generate markdown articles for each topic based on the ratings in `data/ratings.json`.|
|`cms_publish.py`|Publish the generated markdown files to the configured CMS.|
|`analytics_monitor.py`|Fetch performance data from the analytics API and append it to `reports/summary.csv`.|

## Required Environment Variables

Set the following variables in your shell or as GitHub Secrets so they are available to the workflow:

- `SHEET_CSV_URL` – public CSV export URL of the Google Sheet containing product ratings.
- `OPENAI_API_KEY` – API key used by `content_gen.py` for article generation.
- `CMS_API_KEY` – authentication key for the CMS used by `cms_publish.py`.
- `ANALYTICS_API_KEY` – key for fetching analytics in `analytics_monitor.py`.

Locally, you can export these variables or place them in an `.env` file before running the scripts. In GitHub Actions they should be stored as repository secrets.

## Adding or Updating Products

1. Open the Google Sheet referenced by `SHEET_CSV_URL` and edit or append rows for new products. Alternatively, update a local CSV with the same columns.
2. The `data_ingest.py` script downloads this sheet and converts the rows to JSON. After modifying the sheet, run the pipeline again to pick up your changes.

## Running the Pipeline Locally

```bash
pip install -r catdata-pipeline/requirements.txt
export SHEET_CSV_URL="<csv export url>"
export OPENAI_API_KEY="<your openai key>"
export CMS_API_KEY="<your cms key>"
export ANALYTICS_API_KEY="<your analytics key>"
python catdata-pipeline/data_ingest/data_ingest.py
python catdata-pipeline/rating/rating.py
python catdata-pipeline/content_gen/content_gen.py
python catdata-pipeline/utils/affiliates.py
python catdata-pipeline/cms_publish/cms_publish.py
python catdata-pipeline/analytics_monitor/analytics_monitor.py
```

## Manually Triggering the GitHub Actions Workflow

If manual runs are enabled, navigate to **Actions → “CatData Pipeline Schedule”** in GitHub and press **Run workflow**. Alternatively, you can trigger it from the command line with the GitHub CLI:

```bash
gh workflow run "CatData Pipeline Schedule" --ref main
```

## Interpreting `reports/summary.csv`

`summary.csv` contains daily performance metrics with the columns `date`, `clicks`, and `revenue`. Each time the analytics monitor runs, new rows are appended. Higher click and revenue values indicate better performing articles. The file can be opened in any spreadsheet tool for graphing or further analysis.
