# syntax=docker/dockerfile:1.7

ARG NODE_VERSION=24

# Stage 1: dependencias
FROM node:${NODE_VERSION}-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Stage 2: build
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: runtime
# El bundle SSR es autocontenido (solo importa node builtins), por eso la imagen
# final no lleva node_modules.
FROM node:${NODE_VERSION}-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4000
ENV HOST=0.0.0.0

COPY --from=builder --chown=node:node /app/dist/elias/server ./dist/elias/server
COPY --from=builder --chown=node:node /app/dist/elias/browser ./dist/elias/browser

USER node
EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=5s --retries=3 --start-period=20s \
  CMD wget -qO- http://127.0.0.1:4000/healthz || exit 1

CMD ["node", "dist/elias/server/server.mjs"]
