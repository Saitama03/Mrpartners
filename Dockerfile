ARG ALPINE_VERSION=3.20
ARG NODE_VERSION=23.1

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base
RUN npm install -g npm@latest --ignore-scripts
ENV NEXT_TELEMETRY_DISABLED=1


FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

FROM base AS builder
WORKDIR /app
COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app

RUN mkdir -p /app/.next/cache\
    && chown -R node:node /app/.next
COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

FROM base AS dev
WORKDIR /app

RUN mkdir -p /app/.next/cache && chown -R node:node /app/.next

COPY --from=deps --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node . .

USER node
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "dev"]