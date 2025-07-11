FROM node:22-alpine AS build

WORKDIR /app

ARG VITE_PORTFOLIO_API
ARG VITE_ACCESS_API
ARG VITE_AGENTIC_API

ENV VITE_PORTFOLIO_API=$VITE_PORTFOLIO_API
ENV VITE_ACCESS_API=$VITE_ACCESS_API
ENV VITE_AGENTIC_API=$VITE_AGENTIC_API

COPY package.json package-lock.json ./
RUN npm ci

COPY . /app
RUN npm run build

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/build/client /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
