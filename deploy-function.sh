#!/bin/bash

# RADICA Cloud Function Deployment Script
# Deploy form handler to Google Cloud Functions

set -e

# Configuration
FUNCTION_NAME="submitForm"
REGION="asia-east1"
PROJECT_ID="${GCP_PROJECT_ID:-your-project-id}"

echo "🚀 Deploying Cloud Function..."

# Check for required environment variables
if [ -z "$EMAIL_USER" ] || [ -z "$EMAIL_PASS" ]; then
    echo "⚠️  Warning: EMAIL_USER and EMAIL_PASS environment variables are not set."
    echo "You can set them during deployment or update them later in the Cloud Console."
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

cd cloud-functions

# Deploy the function
gcloud functions deploy ${FUNCTION_NAME} \
    --project=${PROJECT_ID} \
    --region=${REGION} \
    --runtime=nodejs18 \
    --trigger-http \
    --allow-unauthenticated \
    --entry-point=submitForm \
    --set-env-vars="EMAIL_USER=${EMAIL_USER},EMAIL_PASS=${EMAIL_PASS}" \
    --memory=256MB \
    --timeout=30s

echo ""
echo "✅ Cloud Function deployed!"
echo ""
echo "📋 Function URL:"
gcloud functions describe ${FUNCTION_NAME} \
    --project=${PROJECT_ID} \
    --region=${REGION} \
    --format='value(httpsTrigger.url)'
echo ""
echo "⚠️  Remember to update PUBLIC_FORM_ENDPOINT in your Astro site with this URL."
