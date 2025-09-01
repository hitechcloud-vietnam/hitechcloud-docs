# Stage 1: Build
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve build với docusaurus serve
FROM node:20
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
CMD ["npm", "run", "serve"]
