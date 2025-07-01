# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e269439c-4498-4223-b902-045ee9c9aa66

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e269439c-4498-4223-b902-045ee9c9aa66) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e269439c-4498-4223-b902-045ee9c9aa66) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## CatData AI Pipeline

This repository includes an automated pipeline in the `catdata-pipeline` directory.
The workflow downloads rating data, computes scores, generates articles with the
FTC disclosure, updates affiliate links, publishes the content and records
analytics. The pipeline is executed weekly by a GitHub Actions schedule.

### Pipeline steps

1. **Data ingestion** – `data_ingest/data_ingest.py` fetches topic ratings from
   `RATINGS_API_TEMPLATE` and stores them in `data/ratings_raw.json`.
2. **Rating computation** – `rating/rating.py` adds a `lives_rating` to each entry.
3. **Content generation** – `content_gen/content_gen.py` creates markdown files
   prefixed with the required FTC disclosure.
4. **Affiliate update** – `utils/affiliates.py` replaces placeholders with real
   URLs from `affiliates.csv`.
5. **Publishing** – `cms_publish/cms_publish.py` pushes pages to your CMS.
6. **Analytics** – `analytics_monitor/analytics_monitor.py` stores basic metrics.

### Environment variables

- `OPENAI_API_KEY` – API key for content generation.
- `CMS_API_URL` – Endpoint for publishing pages.
- `CMS_API_KEY` – Authentication token for the CMS.
- `RATINGS_API_TEMPLATE` – Template URL for rating ingestion.
- `ANALYTICS_API_URL` / `ANALYTICS_API_KEY` – Analytics endpoints.
- `SLACK_WEBHOOK_URL` – Webhook used by the scheduled workflow for failure alerts.

### Adding affiliate links

Affiliate placeholders like `{{amazon:Cat Food A}}` are replaced according to
`catdata-pipeline/affiliates.csv`. Add new rows to that CSV and run the
pipeline (or `python catdata-pipeline/utils/affiliates.py`) to update links.

### Fetching product images

Install dependencies and run:

```sh
pip install requests beautifulsoup4
python fetch_images.py
```
