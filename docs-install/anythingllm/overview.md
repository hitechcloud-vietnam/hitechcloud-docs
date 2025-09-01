# Installation Overview

AnythingLLM Docker is both a single-user and multi-user application you can install on any webserver using Docker and leverage local LLMs, RAG, and Agents with little to zero configuration and full privacy.

Self-hosting AnythingLLM via Docker is very popular and can be done locally or on cloud services (AWS, Google Cloud, Railway, etc.).

## Docker vs Desktop Version

**Tip:** AnythingLLM Desktop is the easiest way to get started with AnythingLLM.

If you don’t need multi-user support, you should use AnythingLLM Desktop.

There are some distinct differences in functionality between each offering. Both are open source.

### You want AnythingLLM Docker if...

- You need an easy setup, but server-based service for AnythingLLM to use local LLMs, RAG, and Agents locally
- You want to run an AnythingLLM instance that many people can use at the same time
- You want to be able to share information with users on your instance you invite
- You need admin and rule-based access for workspaces and documents
- You will publish chat widgets to the public internet
- You want to access AnythingLLM from the browser

### You want AnythingLLM Desktop if...

- You want a one-click installable app to use local LLMs, RAG, and Agents locally
- You do not need multi-user support
- Everything needs to stay only on your device
- You do not need to "publish" anything to the public internet (e.g., chat widget for website)

## Feature Comparison

The below table is a non-exhaustive list of features supported between platforms.

| Feature                        | Available on Desktop | Available on Docker |
|--------------------------------|----------------------|---------------------|
| Multi-user support             | ❌                  | ✅                  |
| Embeddable chat widgets        | ❌                  | ✅                  |
| One-click install              | ✅                  | ❌                  |
| Private documents              | ✅                  | ✅                  |
| Connect to any vector database | ✅                  | ✅                  |
| Use any LLM                    | ✅                  | ✅                  |
| Built-in embedding provider    | ✅                  | ✅                  |
| Built-in LLM provider          | ✅                  | ❌                  |
| White-labeling                 | ❌                  | ✅                  |
| Chat logs                      | ✅                  | ✅                  |
| Agent support                  | ✅                  | ✅                  |
| Agent skills                   | ✅                  | ✅                  |
| Third-party data connectors    | ✅                  | ✅                  |
| Password protection            | ❌                  | ✅                  |
| Invite new users to instance   | ❌                  | ✅                  |
| Text splitting configuration   | ✅                  | ✅                  |
| Whisper model support          | ✅                  | ✅                  |
| Full developer API             | ✅                  | ✅                  |
| User management                | ❌                  | ✅                  |
| Workspace access management    | ❌                  | ✅                  |
| Website scraping               | ✅                  | ✅                  |