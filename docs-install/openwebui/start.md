# Boot the system and load the model

## Boot the system
- Run Docker Compose:
```bash
docker compose up -d
```

## Check logs
- Check container logs:
```bash
docker logs -f ollama
docker logs -f openwebui
```

## Load the models
- Run the command:
```bash
docker exec -it ollama ollama pull gpt-oss:20b
docker exec -it ollama ollama pull llama3
docker exec -it ollama ollama pull qwen2.5-coder:32b
docker exec -it ollama ollama pull codellama:13b
```