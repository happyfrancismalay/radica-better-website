#!/bin/bash

# RADICA Static Site Deployment Script
# Deploy to Google Cloud Storage

set -e

# Configuration
BUCKET_NAME="radicaai-static"
REGION="asia-east1"
PROJECT_ID="${GCP_PROJECT_ID:-your-project-id}"

echo "🚀 Starting deployment to Google Cloud Storage..."

# Build the Astro site
echo "📦 Building Astro site..."
npm run build

# Check if bucket exists, create if not
if ! gsutil ls -b gs://${BUCKET_NAME} &>/dev/null; then
    echo "🪣 Creating bucket gs://${BUCKET_NAME}..."
    gsutil mb -p ${PROJECT_ID} -l ${REGION} gs://${BUCKET_NAME}

    # Configure bucket for website hosting
    echo "🌐 Configuring bucket for website hosting..."
    gsutil web set -m index.html -e 404.html gs://${BUCKET_NAME}

    # Set public access
    echo "🔓 Setting public access..."
    gsutil iam ch allUsers:objectViewer gs://${BUCKET_NAME}
fi

# Sync files to bucket
echo "📤 Uploading files..."
gsutil -m rsync -r -d ./dist gs://${BUCKET_NAME}

# Set cache headers for different file types
echo "⚡ Setting cache headers..."

# HTML files - short cache, must revalidate
gsutil -m setmeta -h "Cache-Control:public, max-age=3600, must-revalidate" \
    "gs://${BUCKET_NAME}/**/*.html"

# CSS/JS - long cache with versioning
gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, immutable" \
    "gs://${BUCKET_NAME}/_astro/*"

# Images - long cache
gsutil -m setmeta -h "Cache-Control:public, max-age=86400" \
    "gs://${BUCKET_NAME}/**/*.{png,jpg,jpeg,gif,svg,webp,ico}" 2>/dev/null || true

echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update Cloudflare DNS: CNAME → c.storage.googleapis.com"
echo "2. Configure SSL in Cloudflare"
echo "3. Set up Page Rules for caching"
echo ""
echo "🌍 Your site is live at: https://storage.googleapis.com/${BUCKET_NAME}/index.html"
