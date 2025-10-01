#!/bin/bash
echo "🧹 Cleaning old build..."
rm -rf .next
rm -rf node_modules/.cache

echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

echo "🔨 Building Next.js..."
npm run build