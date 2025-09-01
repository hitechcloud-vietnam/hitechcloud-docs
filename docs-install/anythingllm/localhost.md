# Connecting to Localhost Services in Dockerized AnythingLLM

The provided instructions below assume you are running AnythingLLM via the official startup command.

## Using Any Localhost Service When Running AnythingLLM in Docker

When running AnythingLLM in Docker, you may need to connect to a service running on localhost. This could be any of the following:

- A PostgreSQL database
- An LLM, Embedding, or Vector Database provider (LMStudio, Ollama, Chroma, etc.)
- Any other service running on the same machine where you are using localhost, 127.0.0.1, or 0.0.0.0 to connect it with AnythingLLM

### localhost, 127.0.0.1, 0.0.0.0 Will Not Work!

When running AnythingLLM in Docker, the localhost, 127.0.0.1, or 0.0.0.0 addresses do not exist in the container!

This means when you are using localhost, 127.0.0.1, or 0.0.0.0 in any connection configuration, they will not work as expected because these connections never leave the AnythingLLM container.

## How to Connect to a Service Running on Localhost

If you need to connect to a service running on localhost or even a service running in another Docker container, simply modify anywhere you are using localhost, 127.0.0.1, or 0.0.0.0 to use the `host.docker.internal` address instead.

### Note About Linux

On Linux, you must use the `172.17.0.1` address instead of `host.docker.internal` to connect to the host machine.

## Examples

### PostgreSQL
```
postgresql://dbuser:dbpassword@localhost:5432/dbname => postgresql://dbuser:dbpassword@host.docker.internal:5432/dbname
```

### Ollama
```
http://localhost:11434 => http://host.docker.internal:11434
```

### Chroma
```
http://localhost:8000 => http://host.docker.internal:8000
```

### LMStudio
```
http://localhost:1234 => http://host.docker.internal:1234
```

## General Debugging

If you are having issues with AnythingLLM, the first thing you should do is check the logs. You can find the logs in the logs folder of your container.

### AnythingLLM Debug Mode on Docker

- Open Container Logs in Docker Desktop
- Print the logs via:
```bash
docker container <CONTAINER_ID> logs
```