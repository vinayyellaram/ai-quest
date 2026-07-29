#!/bin/bash
# Deploy AI Quest to GitHub Pages
# Run from ai-learning folder: ./deploy.sh

set -e
cd "$(dirname "$0")"

echo "→ Checking git..."
if ! git rev-parse --git-dir > /dev/null 2>&1; then
  git init -b main
fi

if ! git remote get-url origin > /dev/null 2>&1; then
  echo ""
  echo "No GitHub remote yet. Create repo first:"
  echo "  1. Go to https://github.com/new"
  echo "  2. Name: ai-quest (public)"
  echo "  3. Do NOT add README"
  echo "  4. Run:"
  echo "     git remote add origin git@github.com:vinayyellaram/ai-quest.git"
  echo "     ./deploy.sh"
  exit 1
fi

git add .
git diff --cached --quiet || git commit -m "Update AI Quest dashboard"
git push -u origin main

echo ""
echo "✓ Pushed! Enable GitHub Pages:"
echo "  Repo → Settings → Pages → Source: GitHub Actions"
echo ""
echo "  Live in ~1 min at:"
echo "  https://vinayyellaram.github.io/ai-quest/"
