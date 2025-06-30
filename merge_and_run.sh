#!/bin/bash

# Script to merge the pipeline branch into main and trigger the CatData Pipeline Schedule workflow
# Usage: ./merge_and_run.sh
# Make sure you have write access to the repository and GitHub CLI installed & authenticated.

set -euo pipefail

#--- Prerequisite checks -------------------------------------------------------

# Ensure we are inside a git repository
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: This script must be run inside a Git repository." >&2
  exit 1
fi

# Ensure GitHub CLI is installed
if ! command -v gh >/dev/null 2>&1; then
  echo "Error: GitHub CLI (gh) is not installed." >&2
  exit 1
fi

# Ensure GitHub CLI is authenticated
if ! gh auth status >/dev/null 2>&1; then
  echo "Error: GitHub CLI is not authenticated. Run 'gh auth login' first." >&2
  exit 1
fi

# Capture the current branch so we can return to it later
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

#--- Merge pipeline into main -------------------------------------------------

echo "Checking out pipeline branch..."
# Fetch and check out the pipeline branch
git fetch origin pipeline:pipeline || true
git checkout pipeline

echo "Updating pipeline branch from origin..."
# Pull the latest pipeline
git pull --ff-only origin pipeline

echo "Switching to main branch..."
# Switch back to main and ensure it's up to date
git checkout main
git pull --ff-only origin main

echo "Merging pipeline into main..."
# Merge pipeline into main
git merge pipeline -m "Merge pipeline into main" || {
  echo "Merge failed. Please resolve conflicts manually." >&2
  exit 1
}

echo "Pushing main to origin..."
# Push the updated main branch
git push origin main

#--- Create & merge pull request on GitHub ------------------------------------

REPO=$(git config --get remote.origin.url)

echo "Checking for existing pull request from pipeline to main..."
# Find an open PR from pipeline to main
PR_NUMBER=$(gh pr list --head pipeline --base main --repo "$REPO" --state open --json number -q '.[0].number')

if [ -z "$PR_NUMBER" ]; then
  echo "No open PR found. Creating one..."
  PR_NUMBER=$(gh pr create --base main --head pipeline --title "Merge pipeline into main" \
    --body "Automated merge of pipeline branch." --repo "$REPO" -q '.number')
fi

echo "Merging pull request #$PR_NUMBER..."
# Merge the PR and delete the branch remotely
gh pr merge "$PR_NUMBER" --merge --delete-branch --repo "$REPO" -y

#--- Trigger GitHub Actions workflow -----------------------------------------

echo "Triggering 'CatData Pipeline Schedule' workflow..."
# Run the workflow on the main branch
gh workflow run "CatData Pipeline Schedule" --ref main --repo "$REPO"

echo "Workflow triggered."

echo "Returning to original branch $CURRENT_BRANCH..."
# Switch back to the original branch
git checkout "$CURRENT_BRANCH"

echo "Done."
