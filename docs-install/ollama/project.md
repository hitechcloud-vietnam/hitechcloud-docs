# Create project directory and `.env` file

## Create project directory
- Run command:
```bash
mkdir -p /www/dk_project/dk_app/ollama_and_openwebui
cd /www/dk_project/dk_app/ollama_and_openwebui
```

## Create `.env` file
Create `.env` file with content after:
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
- **Note**: Replace `WEBUI_SECRET_KEY` with another security string.