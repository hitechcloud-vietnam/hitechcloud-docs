# Dùng Nginx với vLLM {#using-nginx-with-vllm}

Tài liệu này hướng dẫn khởi chạy nhiều container phục vụ vLLM và dùng Nginx làm bộ cân bằng tải giữa các máy chủ.

## Build container Nginx {#build-nginx-container}

Hướng dẫn này giả định bạn vừa clone dự án vLLM và đang ở thư mục gốc của vLLM.

### Lệnh {#command}

```bash
export vllm_root=`pwd`
```

Tạo tệp tên `Dockerfile.nginx`:

```dockerfile
FROM nginx:latest
RUN rm /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build container:

```bash
docker build . -f Dockerfile.nginx --tag nginx-lb
```

## Tạo tệp cấu hình Nginx đơn giản {#create-simple-nginx-config-file}

Tạo tệp tên `nginx_conf/nginx.conf`. Lưu ý bạn có thể thêm bao nhiêu máy chủ tùy ý. Trong ví dụ dưới đây, chúng ta bắt đầu với hai máy chủ. Để thêm, hãy thêm một mục `server vllmN:8000 max_fails=3 fail_timeout=10000s;` khác vào `upstream backend`.

### Cấu hình {#config}

```nginx
upstream backend {
    least_conn;
    server vllm0:8000 max_fails=3 fail_timeout=10000s;
    server vllm1:8000 max_fails=3 fail_timeout=10000s;
}
server {
    listen 80;
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Build container vLLM {#build-vllm-container}

```bash
cd $vllm_root
docker build -f docker/Dockerfile . --tag vllm
```

Nếu bạn ở sau proxy, có thể truyền cài đặt proxy cho lệnh docker build như bên dưới:

```bash
cd $vllm_root
docker build \
    -f docker/Dockerfile . \
    --tag vllm \
    --build-arg http_proxy=$http_proxy \
    --build-arg https_proxy=$https_proxy
```

## Tạo mạng Docker {#create-docker-network}

```bash
docker network create vllm_nginx
```

## Khởi chạy các container vLLM {#launch-vllm-containers}

### Lưu ý {#notes}

- Nếu bạn lưu cache mô hình HuggingFace ở nơi khác, hãy cập nhật `hf_cache_dir` bên dưới.
- Nếu bạn chưa có cache HuggingFace, hãy khởi động `vllm0` và chờ mô hình tải xong và máy chủ sẵn sàng. Việc này bảo đảm `vllm1` tận dụng được mô hình vừa tải mà không phải tải lại.
- Ví dụ dưới đây giả định dùng backend GPU. Nếu dùng backend CPU, hãy bỏ `--gpus device=ID` và thêm các biến môi trường `VLLM_CPU_KVCACHE_SPACE` và `VLLM_CPU_OMP_THREADS_BIND` vào lệnh docker run.
- Hãy điều chỉnh tên mô hình bạn muốn dùng trong các máy chủ vLLM nếu không muốn dùng `Llama-2-7b-chat-hf`.

### Các lệnh {#commands}

```bash
mkdir -p ~/.cache/huggingface/hub/
hf_cache_dir=~/.cache/huggingface/
docker run \
    -itd \
    --ipc host \
    --network vllm_nginx \
    --gpus device=0 \
    --shm-size=10.24gb \
    -v $hf_cache_dir:/root/.cache/huggingface/ \
    -p 8081:8000 \
    --name vllm0 vllm \
    --model meta-llama/Llama-2-7b-chat-hf
docker run \
    -itd \
    --ipc host \
    --network vllm_nginx \
    --gpus device=1 \
    --shm-size=10.24gb \
    -v $hf_cache_dir:/root/.cache/huggingface/ \
    -p 8082:8000 \
    --name vllm1 vllm \
    --model meta-llama/Llama-2-7b-chat-hf
```

**Lưu ý:** nếu bạn ở sau proxy, có thể truyền cài đặt proxy cho lệnh docker run qua `-e http_proxy=$http_proxy -e https_proxy=$https_proxy`.

## Khởi chạy Nginx {#launch-nginx}

```bash
docker run \
    -itd \
    -p 8000:80 \
    --network vllm_nginx \
    -v ./nginx_conf/:/etc/nginx/conf.d/ \
    --name nginx-lb nginx-lb:latest
```

## Kiểm tra các máy chủ vLLM đã sẵn sàng {#verify-that-vllm-servers-are-ready}

```bash
docker logs vllm0 | grep Uvicorn
docker logs vllm1 | grep Uvicorn
```

Cả hai kết quả đầu ra sẽ trông như sau:

```plaintext
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
```