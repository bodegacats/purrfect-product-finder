#!/bin/bash
# Script to move GitHub Actions workflow to repo root
# Creates root .github/workflows directory if missing, moves schedule.yml, commits and pushes

set -e

# Ensure .github/workflows at root
if [ ! -d ".github/workflows" ]; then
    echo "Creating .github/workflows directory"
    mkdir -p .github/workflows
fi

SRC="catdata-pipeline/.github/workflows/schedule.yml"
DST=".github/workflows/schedule.yml"

if [ ! -f "$SRC" ]; then
    echo "Source workflow $SRC does not exist. Aborting." >&2
    exit 1
fi

# Move the workflow to root
mv "$SRC" "$DST"

echo "Moved $SRC to $DST"

git add "$DST"

# Remove original directory if empty
if [ -d "catdata-pipeline/.github/workflows" ] && [ ! "$(ls -A catdata-pipeline/.github/workflows)" ]; then
    rmdir catdata-pipeline/.github/workflows
fi
if [ -d "catdata-pipeline/.github" ] && [ ! "$(ls -A catdata-pipeline/.github)" ]; then
    rmdir catdata-pipeline/.github
fi

git rm -f "$SRC" 2>/dev/null || true

git commit -m "Move actions workflow to root .github/workflows"

# Push to origin main (if configured)
git push origin main
