# Stage 1 - Build
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2 - Serve static files
FROM nginx:alpine

EXPOSE 80

COPY --from=builder /app/build/client /usr/share/nginx/html
