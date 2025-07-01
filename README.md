# Purrfect Product Finder

Purrfect Product Finder is a demo site that recommends cat products. The frontend is built with **React/TypeScript** (Vite) and the `catdata-pipeline` directory holds the automation that gathers ratings, generates articles and publishes them to a CMS. A scheduled GitHub Actions workflow runs the pipeline every week but it can also be triggered manually.

## Pipeline overview

The pipeline moves data through several stages. The exact steps are also described in [docs/pipeline.md](docs/pipeline.md).

1. **Data Ingestion** – fetch the latest ratings CSV and store it as `data/ratings_raw.json`.
2. **Rating Computation** – calculate a `lives_rating` value for each product.
3. **Content Generation** – create articles with OpenAI and save them under `content/`.
4. **Affiliate Update** – replace `{{amazon:PRODUCT}}` style placeholders in the articles using URLs from `affiliates.csv`.
5. **Publish** – send the articles to the CMS.
6. **Analytics** – download performance metrics and append them to `reports/summary.csv`.

```
Data -> Rating -> Content -> Affiliate URLs -> CMS -> Analytics
```

## Scripts

| Path | Description |
| ---- | ----------- |
| `catdata-pipeline/data_ingest/data_ingest.py` | Download the ratings data from the sheet/CSV. |
| `catdata-pipeline/rating/rating.py` | Compute `lives_rating` and write `data/ratings.json`. |
| `catdata-pipeline/content_gen/content_gen.py` | Generate articles using the OpenAI API. |
| `catdata-pipeline/utils/affiliates.py` | Insert affiliate URLs into the generated articles. |
| `catdata-pipeline/cms_publish/cms_publish.py` | Publish articles to the CMS. |
| `catdata-pipeline/analytics_monitor/analytics_monitor.py` | Fetch analytics data and update `reports/summary.csv`. |
| `fetch_images.py` | Populate `affiliates.csv` with `image_url` values by scraping each product link. |
| `merge_and_run.sh` | Merge the `pipeline` branch into `main` and trigger the GitHub Actions workflow. |
| `enable_manual_run.sh` | Add a manual trigger (`workflow_dispatch`) to `schedule.yml`. |
| `restructure_workflow.sh` | Move the workflow file to `.github/workflows` if required. |

## Required environment variables

These variables must be available when running the pipeline locally or via GitHub Actions:

- `SHEET_CSV_URL` – CSV export URL of the Google Sheet that stores product links.
- `OPENAI_API_KEY` – API key used by `content_gen/content_gen.py`.
- `CMS_API_KEY` – Authentication token for publishing content.
- `ANALYTICS_API_KEY` – Token for accessing the analytics API.

Export them in your shell or define them as secrets in your GitHub repository settings.

## Adding or updating products

Product information lives in `catdata-pipeline/affiliates.csv`. The file can be edited directly or synced from a Google Sheet.

1. Update the Google Sheet and copy the **CSV export** link.
2. Set `SHEET_CSV_URL` to that link.
3. Run `python catdata-pipeline/data_ingest/data_ingest.py` to pull the sheet and refresh `affiliates.csv`.

You may also edit the CSV manually and optionally run `fetch_images.py` to fill in missing `image_url` fields.

## Running locally

Install Node and Python dependencies:

```bash
npm install
pip install -r catdata-pipeline/requirements.txt
```

Set the environment variables shown above and then execute each stage:

```bash
python catdata-pipeline/data_ingest/data_ingest.py
python catdata-pipeline/rating/rating.py
python catdata-pipeline/content_gen/content_gen.py
python catdata-pipeline/utils/affiliates.py
python catdata-pipeline/cms_publish/cms_publish.py
python catdata-pipeline/analytics_monitor/analytics_monitor.py
```

To develop the frontend run `npm run dev`.

### Triggering GitHub Actions manually

The weekly workflow defined in `.github/workflows/schedule.yml` can also be invoked on demand. Run:

```bash
./merge_and_run.sh
```

The script merges the `pipeline` branch into `main`, pushes it and triggers the **CatData Pipeline Schedule** workflow using the GitHub CLI.

## Understanding `reports/summary.csv`

`reports/summary.csv` is appended by the analytics step. It contains three columns:

- `date` – ISO formatted date of the analytics snapshot.
- `clicks` – number of recorded affiliate link clicks for that day.
- `revenue` – revenue in USD for that day.

You can import the CSV into any spreadsheet tool to graph performance over time.

