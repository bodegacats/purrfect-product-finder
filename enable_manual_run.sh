#!/bin/bash
# Script to enable manual trigger for CatData Pipeline workflow

set -e

if [ ! -f .github/workflows/schedule.yml ]; then
  echo "Error: .github/workflows/schedule.yml not found" >&2
  exit 1
fi

# Add workflow_dispatch after the cron schedule if not present
if ! grep -q '^  workflow_dispatch:' .github/workflows/schedule.yml; then
  sed -i "/cron: '0 8 * * 1'/a\  workflow_dispatch:" .github/workflows/schedule.yml
fi

# Commit and push
git add .github/workflows/schedule.yml
git commit -m "Enable manual trigger for CatData Pipeline workflow"

git push origin main
