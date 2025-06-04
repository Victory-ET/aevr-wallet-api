# No need for BuildKit syntax directive anymore

FROM node:lts as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install dependencies without using secrets
RUN npm ci

# Copy source code
COPY . .

# Compile TypeScript
RUN npm run compile

FROM node:lts-slim

ENV NODE_ENV production

# Switch to root to install Python and build tools
# Install necessary build dependencies including curl for healthcheck
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    curl \
    tini \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Install dependencies with npm
RUN npm ci --omit=dev

# Switch back to node user for security
USER node

COPY --from=builder /usr/src/app/dist ./dist

# Update exposed port to match .env and docker-compose.yml
EXPOSE 9872

# Use Tini as entrypoint for better signal handling
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD [ "node", "dist/index.js" ]
