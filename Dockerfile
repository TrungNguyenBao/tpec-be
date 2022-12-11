# Install dependencies only when
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk add git

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# NODE_OPTIONS="--max-old-space-size=8192" \
ENV NODE_ENV=production

# Build app
COPY . .
RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
