# Khởi động hệ thống và nạp mô hình {#boot-the-system-and-load-the-model}

## Khởi động hệ thống {#boot-the-system}
- Chạy Docker Compose:
```bash
docker compose up -d
```

## Kiểm tra log {#check-logs}
- Kiểm tra log của container:
```bash
docker logs -f ollama
docker logs -f openwebui
```

## Nạp các mô hình {#load-the-models}
- Chạy lệnh:
```bash
docker exec -it ollama ollama pull gpt-oss:20b
docker exec -it ollama ollama pull llama3
docker exec -it ollama ollama pull qwen2.5-coder:32b
docker exec -it ollama ollama pull codellama:13b
```