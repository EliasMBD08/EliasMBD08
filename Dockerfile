# Stage 1: Build
FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Run SSR
FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4000

COPY --from=builder /app/dist/elias ./dist/elias
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 4000
CMD ["node", "dist/elias/server/server.mjs"]
