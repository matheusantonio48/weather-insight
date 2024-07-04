FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm run build-storybook

FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/storybook-static ./storybook-static

EXPOSE 3000
EXPOSE 6006

CMD ["npm", "start"]
