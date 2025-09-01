# Quickstart Guide for Dockerized AnythingLLM

## Start AnythingLLM via Docker

### Linux/MacOS

```bash
export STORAGE_LOCATION=$HOME/anythingllm && \
mkdir -p $STORAGE_LOCATION && \
touch "$STORAGE_LOCATION/.env" && \
docker run -d -p 3001:3001 \
--cap-add SYS_ADMIN \
-v ${STORAGE_LOCATION}:/app/server/storage \
-v ${STORAGE_LOCATION}/.env:/app/server/.env \
-e STORAGE_DIR="/app/server/storage" \
mintplexlabs/anythingllm:latest
```

Go to [http://localhost:3001](http://localhost:3001) and you are now using AnythingLLM! All your data and progress will persist between container rebuilds or pulls from Docker Hub.

### Windows

```powershell
$env:STORAGE_LOCATION="$HOME\Documents\anythingllm"; `
If(!(Test-Path $env:STORAGE_LOCATION)) {New-Item $env:STORAGE_LOCATION -ItemType Directory}; `
If(!(Test-Path "$env:STORAGE_LOCATION\.env")) {New-Item "$env:STORAGE_LOCATION\.env" -ItemType File}; `
docker run -d -p 3001:3001 `
--cap-add SYS_ADMIN `
-v "$env:STORAGE_LOCATION:/app/server/storage" `
-v "$env:STORAGE_LOCATION\.env:/app/server/.env" `
-e STORAGE_DIR="/app/server/storage" `
mintplexlabs/anythingllm:latest;
```

Go to [http://localhost:3001](http://localhost:3001) and you are now using AnythingLLM! All your data and progress will persist between container rebuilds or pulls from Docker Hub.

## How to Use the User Interface

To access the full application, visit [http://localhost:3001](http://localhost:3001) in your browser.

## About UID and GID in the ENV

The UID and GID are set to 1000 by default. This is the default user in the Docker container and on most host operating systems.

If there is a mismatch between your host user UID and GID and what is set in the `.env` file, you may experience permission issues.

## pg Image Startup Command

The `pg` image has a slightly different startup command to support the PostgreSQL database connection.

First, ensure you have a PostgreSQL database running and a PGVector extension installed on that database.

### Linux/MacOS

```bash
export STORAGE_LOCATION=$HOME/anythingllm && \
mkdir -p $STORAGE_LOCATION && \
touch "$STORAGE_LOCATION/.env" && \
docker run -d -p 3001:3001 \
--cap-add SYS_ADMIN \
-v ${STORAGE_LOCATION}:/app/server/storage \
-v ${STORAGE_LOCATION}/.env:/app/server/.env \
-e STORAGE_DIR="/app/server/storage" \
-e DATABASE_URL="postgresql://dbuser:dbpassword@host.docker.internal:5432/dbname" \
mintplexlabs/anythingllm:pg
```

### Windows

```powershell
$env:STORAGE_LOCATION="$HOME\Documents\anythingllm"; `
If(!(Test-Path $env:STORAGE_LOCATION)) {New-Item $env:STORAGE_LOCATION -ItemType Directory}; `
If(!(Test-Path "$env:STORAGE_LOCATION\.env")) {New-Item "$env:STORAGE_LOCATION\.env" -ItemType File}; `
docker run -d -p 3001:3001 `
--cap-add SYS_ADMIN `
-v "$env:STORAGE_LOCATION:/app/server/storage" `
-v "$env:STORAGE_LOCATION\.env:/app/server/.env" `
-e STORAGE_DIR="/app/server/storage" `
-e DATABASE_URL="postgresql://dbuser:dbpassword@host.docker.internal:5432/dbname" `
mintplexlabs/anythingllm:pg;
```

## Last Updated

This guide was last updated on **July 17, 2025**.