#!/bin/bash

# Exit on error
set -e

echo "🔨 Building app..."
npm run build

echo "🚀 Uploading to VPS..."
scp -r \
  package.json \
  package-lock.json \
  vite.config.ts \
  build \
  public \
  Rassell@145.223.97.65:/home/Rassell/Tradilyze-app

echo "✅ Deployment complete!"
# ./deploy.sh
