# syntax=docker/dockerfile:1


#######################################
# Base stage
#######################################
FROM node:16 AS base
ENV NODE_ENV=production
WORKDIR /code

COPY ["package.json", "yarn.lock", "./"]


#######################################
# Build application
#######################################
FROM base AS builder

# Use --ignore-scripts flag to avoid husky preinstall
# NODE_ENV is set to production so production=false must be set explicitly
RUN yarn install --production=false --ignore-scripts

COPY . .
RUN yarn build:prod


#######################################
# Final stage
#######################################
FROM base

# Use --ignore-scripts flag to avoid husky preinstall
RUN yarn install --production --ignore-scripts

COPY --from=builder "/code/dist" "./"
COPY ["public", "server", "tsconfig.json", "./"]

EXPOSE 3000
# CMD [ "yarn", "start:prod" ]
