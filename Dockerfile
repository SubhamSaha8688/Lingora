# Multi-stage Dockerfile for Lingora
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/public ./public
COPY --from=builder /app/firebase-applet-config.json ./firebase-applet-config.json

EXPOSE 3000

CMD ["npm", "start"]
