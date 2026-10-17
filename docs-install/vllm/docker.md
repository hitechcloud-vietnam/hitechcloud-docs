# Dùng Docker image chính thức của vLLM {#using-vllms-official-docker-image}

vLLM cung cấp Docker image chính thức để triển khai. Image này có thể dùng để chạy các máy chủ tương thích OpenAI và có trên Docker Hub với tên `vllm/vllm-openai`.

## Chạy vLLM bằng Docker {#running-vllm-with-docker}

### Lệnh {#command}

```bash
docker run --runtime nvidia --gpus all \
    -v ~/.cache/huggingface:/root/.cache/huggingface \
    --env "HUGGING_FACE_HUB_TOKEN=$HF_TOKEN" \
    -p 8000:8000 \
    --ipc=host \
    vllm/vllm-openai:latest \
    --model Qwen/Qwen3-0.6B
```

Image này cũng có thể dùng với các engine container khác như Podman.

### Lệnh Podman {#podman-command}

```bash
podman run --device nvidia.com/gpu=all \
  -v ~/.cache/huggingface:/root/.cache/huggingface \
  --env "HUGGING_FACE_HUB_TOKEN=$HF_TOKEN" \
  -p 8000:8000 \
  --ipc=host \
  docker.io/vllm/vllm-openai:latest \
  --model Qwen/Qwen3-0.6B
```

Bạn có thể thêm bất kỳ tham số engine nào khác sau tag của image (`vllm/vllm-openai:latest`).

## Lưu ý {#notes}

- Bạn có thể dùng cờ `ipc=host` hoặc cờ `--shm-size` để cho phép container truy cập bộ nhớ dùng chung của máy chủ. vLLM dùng PyTorch, và PyTorch dùng bộ nhớ dùng chung để chia sẻ dữ liệu giữa các tiến trình ở bên dưới, đặc biệt với suy luận song song tensor.
- Các phụ thuộc tùy chọn không được đưa vào để tránh vấn đề giấy phép. Nếu cần dùng các phụ thuộc đó, hãy tạo Dockerfile tùy chỉnh dựa trên image gốc, thêm một lớp cài đặt chúng:

### Ví dụ Dockerfile tùy chỉnh {#custom-dockerfile-example}

```dockerfile
FROM vllm/vllm-openai:v0.9.0

# e.g. install the `audio` optional dependencies
# NOTE: Make sure the version of vLLM matches the base image!
RUN uv pip install --system vllm[audio]==0.9.0
```

## Build Docker image của vLLM từ mã nguồn {#building-vllms-docker-image-from-source}

Bạn có thể build và chạy vLLM từ mã nguồn bằng `docker/Dockerfile` đi kèm. Để build vLLM:

### Lệnh {#command-1}

```bash
# optionally specifies: --build-arg max_jobs=8 --build-arg nvcc_threads=2
DOCKER_BUILDKIT=1 docker build . \
    --target vllm-openai \
    --tag vllm/vllm-openai \
    --file docker/Dockerfile
```

### Lưu ý {#notes-1}

- Theo mặc định, vLLM build cho mọi loại GPU để phân phối rộng nhất. Nếu bạn chỉ build cho loại GPU của máy đang chạy, có thể thêm tham số `--build-arg torch_cuda_arch_list=""` để vLLM tự tìm loại GPU hiện tại và build cho loại đó.
- Nếu dùng Podman thay cho Docker, bạn có thể cần tắt gán nhãn SELinux bằng cách thêm `--security-opt label=disable` khi chạy lệnh build của Podman để tránh một số vấn đề hiện có.

## Build cho Arm64/aarch64 {#building-for-arm64aarch64}

Có thể build container Docker cho các hệ thống aarch64 như Nvidia Grace-Hopper. Tại thời điểm viết, việc này cần dùng PyTorch Nightly và nên được coi là thử nghiệm. Dùng cờ `--platform "linux/arm64"` sẽ thử build cho arm64.

### Lệnh {#command-2}

```bash
# Example of building on Nvidia GH200 server. (Memory usage: ~15GB, Build time: ~1475s / ~25 min, Image size: 6.93GB)
python3 use_existing_torch.py
DOCKER_BUILDKIT=1 docker build . \
--file docker/Dockerfile \
--target vllm-openai \
--platform "linux/arm64" \
-t vllm/vllm-gh200-openai:latest \
--build-arg max_jobs=66 \
--build-arg nvcc_threads=2 \
--build-arg torch_cuda_arch_list="9.0 10.0+PTX"
```

### Lưu ý {#notes-2}

- Nếu bạn build image `linux/arm64` trên máy chủ không phải ARM (ví dụ máy x86_64), cần bảo đảm hệ thống đã được thiết lập để biên dịch chéo bằng QEMU. Điều này cho phép máy chủ của bạn giả lập việc thực thi ARM64.

### Thiết lập QEMU {#qemu-setup}

Chạy lệnh sau trên máy chủ để đăng ký các trình xử lý QEMU user static:

```bash
docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
```

Sau khi thiết lập QEMU, bạn có thể dùng cờ `--platform "linux/arm64"` trong lệnh build Docker.

## Dùng Docker image vLLM tự build {#use-the-custom-built-vllm-docker-image}

Để chạy vLLM với Docker image tự build:

### Lệnh {#command-3}

```bash
docker run --runtime nvidia --gpus all \
    -v ~/.cache/huggingface:/root/.cache/huggingface \
    -p 8000:8000 \
    --env "HUGGING_FACE_HUB_TOKEN=<secret>" \
    vllm/vllm-openai <args...>
```

Tham số `vllm/vllm-openai` chỉ định image cần chạy và nên được thay bằng tên của image tự build (tag `-t` trong lệnh build).

### Lưu ý {#notes-3}

- Chỉ với phiên bản `0.4.1` và `0.4.2` - các Docker image vLLM của các phiên bản này cần chạy dưới người dùng root vì một thư viện trong thư mục home của root, tức `/root/.config/vllm/nccl/cu12/libnccl.so.2.18.1`, phải được nạp khi chạy. Nếu chạy container dưới người dùng khác, bạn có thể cần đổi quyền của thư viện (và mọi thư mục cha) để cho phép người dùng đó truy cập, rồi chạy vLLM với biến môi trường `VLLM_NCCL_SO_PATH=/root/.config/vllm/nccl/cu12/libnccl.so.2.18.1`.