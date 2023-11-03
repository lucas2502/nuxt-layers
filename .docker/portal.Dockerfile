## Step 1
FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./

#ENV NODE_ENV = "development"

# RUN apk update && apk upgrade
# RUN apk add --no-cache python3 make g++

# COPY . .

# Install pnpm
RUN npm install -g pnpm

RUN pnpm install

COPY . .

# ENV PATH ./node_modules/.bin/:$PATH

# RUN cp /app/.docker/portal.env /app/apps/portal/.env

# RUN npm install -g pnpm

# RUN pnpm install

# ENV PATH ./node_modules/.bin/:$PATH

# RUN cp /app/.docker/portal.env /app/apps/portal/.env

RUN pnpm run build:portal

## Step 2
FROM node:16-alpine

WORKDIR /app

# ENV NODE_ENV=production
# ENV NUXT_APP_BASE_URL=/ui/portal/

# RUN apk update && apk upgrade

COPY --from=builder /app/apps/portal/.output .output

EXPOSE 3000

CMD ["node", ".output/server/index.mjs" ]
