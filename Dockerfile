# frontend/Dockerfile
# ─────────────────────────────────────────────────────────────────────────────
# 1. Build stage
FROM node:22.15.0-alpine3.20 AS builder

WORKDIR /app

# Copy only what’s needed to install deps
COPY ./package.json ./package-lock.json ./
RUN npm ci

# Copy rest of source & build
COPY . .
RUN npm run build

# 2. Production image
FROM node:22.15.0-alpine3.20

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY ./package.json ./package-lock.json ./

RUN npm ci --only=production

# Copy built assets and package manifest
COPY --from=builder /app/.next ./.next

# Change ownership to non-root user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

EXPOSE 3000

CMD ["npm", "start"]
