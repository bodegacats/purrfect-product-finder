# CatData AI Pipeline

The pipeline processes data through several stages:

1. **Data Ingestion** – download weekly ratings from the remote API.
2. **Rating Computation** – compute a `lives_rating` for each product.
3. **Content Generation** – use OpenAI to create articles. Each markdown file is
   automatically prefixed with the FTC disclosure line.
4. **Affiliate Update** – replace URL placeholders using `affiliates.csv`.
5. **Publish** – push the content to the CMS.
6. **Analytics** – fetch performance data and append it to reports.

```
Data -> Rating -> Content -> Affiliate URLs -> CMS -> Analytics
```
