#!/bin/bash
echo "🧹 Cleaning old build..."
rm -rf .next
rm -rf node_modules/.cache

echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

echo "🔨 Building Next.js..."
npm run build

echo "🚀 Deploying to CapRover..."
caprover deploy -h https://captain.hostnin.cfd -a hostnin -p '71;f6io[QBZp'