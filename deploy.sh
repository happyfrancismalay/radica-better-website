#!/bin/bash

# RADICA Static Site Deployment Script
# Deploy to Google Cloud Storage

set -e

# Configuration
BUCKET_NAME="radica-better-website-static"
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

# Invalidate CDN cache so changes are live immediately
echo "🔄 Invalidating CDN cache..."
gcloud compute url-maps invalidate-cdn-cache radica-website-urlmap --path="/*" 2>/dev/null || echo "⚠️  CDN invalidation skipped (url-map not found or not authorised)"

echo "✅ Deployment complete!"
echo "🌍 Your site is live at: https://www.radicaai.com"
