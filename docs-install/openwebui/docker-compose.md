# Create file `docker-compose.yml`

Create file `docker-compose.yml` with the following content:
```yaml
version: "3.9"

services: 
ollama: 
image: ollama/ollama:latest 
container_name: ollama 
restart: unless-stopped 
tty: true 
ports: 
- "${HOST_IP}:${OLLAMA_PORT}:11434" 
volumes: 
- ${APP_PATH}/ollama:/root/.ollama 
environment: 
- OLLAMA_NUM_THREADS=${OLLAMA_NUM_THREADS} 
- OLLAMA_GPU_LAYERS=${OLLAMA_GPU_LAYERS} 
- OLLAMA_KV_CACHE=${OLLAMA_KV_CACHE} 
- OLLAMA_MAX_LOADED_MODELS=${OLLAMA_MAX_LOADED_MODELS} 
- OLLAMA_NUM_PARALLEL=${OLLAMA_NUM_PARALLEL} 
deploy: 
resources: 
limits: 
cpus: "4" 
memory: 16g 
reservations: 
devices: 
- driver: nvidia 
count: all 
capabilities: [gpu] 
runtime: nvidia 

openwebui: 
image: ghcr.io/open-webui/open-webui:main 
container_name: openwebui 
restart: unless-stopped 
depends_on: 
- ollama 
ports: 
- "${HOST_IP}:${WEBUI_PORT}:8080" 
volumes: 
- ${APP_PATH}/openwebui:/app/backend/data 
environment: 
- OLLAMA_API_BASE=http://ollama:11434 
- WEBUI_SECRET_KEY=${WEBUI_SECRET_KEY}
```