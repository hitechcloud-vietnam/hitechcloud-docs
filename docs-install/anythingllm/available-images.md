# Available Images

## latest

- **Architecture:** amd64 & arm64
- **Deployment Frequency:** On every commit to the master branch
- **Pull Command:** `docker pull mintplexlabs/anythingllm:latest`

The latest image is the most recent version of AnythingLLM. It is updated on a near-daily basis and will always be up to date with the latest features and bug fixes that are committed to the master branch in the AnythingLLM GitHub repository.

## v*.*.*

- **Architecture:** amd64 & arm64
- **Deployment Frequency:** On new releases
- **Pull Command:** `docker pull mintplexlabs/anythingllm:v*.*.*`

The v*.*.* images are the pinned versioned releases of AnythingLLM. These images are published when a new release is made - you can find the latest release [here](https://github.com/mintplexlabs/anythingllm/releases).

## render or railway

**Warning:** You should only specify this image if you are deploying AnythingLLM via Render or Railway.

- **Architecture:** amd64
- **Deployment Frequency:** On new releases
- **Pull Command:** `docker pull mintplexlabs/anythingllm:render`

The render or railway images are the latest versions of AnythingLLM and are in sync with the versioned releases of AnythingLLM.

## pg

- **Architecture:** amd64 & arm64
- **Deployment Frequency:** On new releases
- **Pull Command:** `docker pull mintplexlabs/anythingllm:pg`

The pg image is the latest version of AnythingLLM that is specifically built for use with a local or remote PostgreSQL database.

This image has a slightly different startup command to support the PostgreSQL deployment and does the following:

- Will store all AnythingLLM data in the PostgreSQL database
- Will by default use PGVector for vector storage - requires a PGVector extension to be installed on the PostgreSQL database

See the PostgreSQL image deployment command for more information.