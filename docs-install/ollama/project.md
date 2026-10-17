# Tạo thư mục dự án và tệp `.env` {#create-project-directory-and-env-file}

## Tạo thư mục dự án {#create-project-directory}
- Chạy lệnh:
```bash
mkdir -p /www/dk_project/dk_app/ollama_and_openwebui
cd /www/dk_project/dk_app/ollama_and_openwebui
```

## Tạo tệp `.env` {#create-env-file}
Tạo tệp `.env` với nội dung sau:
```
APP_PATH=/www/dk_project/dk_app/ollama_and_openwebui
HOST_IP=0.0.0.0
OLLAMA_PORT=11434
WEBUI_PORT=18010
WEBUI_SECRET_KEY=mysecretkey123
OLLAMA_NUM_THREADS=4
OLLAMA_GPU_LAYERS=9999
OLLAMA_KV_CACHE=1
OLLAMA_MAX_LOADED_MODELS=2
OLLAMA_NUM_PARALLEL=2
```
- **Lưu ý**: Thay `WEBUI_SECRET_KEY` bằng một chuỗi bảo mật khác.