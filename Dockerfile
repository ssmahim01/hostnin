# ---- 1. Build stage ----
FROM node:18-alpine AS builder
WORKDIR /app

# Copy only package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app (including public folder)
COPY . .

# Build the app (production)
RUN npm run build

# ---- 2. Production stage ----
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy package files (needed for npm start)
COPY --from=builder /app/package*.json ./

# Copy node_modules from builder
COPY --from=builder /app/node_modules ./node_modules

# Copy Next.js build output
COPY --from=builder /app/.next ./.next

# Copy public folder so images/static assets work
COPY --from=builder /app/public ./public

# (Optional) copy next.config.js if you use custom config at runtime
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "run", "start"]
