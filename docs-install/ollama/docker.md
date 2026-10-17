# Docker image của Ollama {#ollama-docker-image}

### Chỉ dùng CPU {#cpu-only}

```shell
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

### GPU Nvidia {#nvidia-gpus}
Cài đặt [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html#installation).

#### Cài đặt bằng Apt {#install-with-apt}
1. Cấu hình kho gói 

```shell 
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey\ 
| sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg 
curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list \ 
| sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' \ 
| sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list 
sudo apt-get update 
```

2. Cài các gói NVIDIA Container Toolkit 

```shell 
sudo apt-get install -y nvidia-container-toolkit 
```

#### Cài đặt bằng Yum hoặc Dnf {#install-with-yum-or-dnf}
1. Cấu hình kho gói 

```shell 
curl -s -L https://nvidia.github.io/libnvidia-container/stable/rpm/nvidia-container-toolkit.repo\ 
| sudo tee /etc/yum.repos.d/nvidia-container-toolkit.repo 
```

2. Cài các gói NVIDIA Container Toolkit 

```shell 
sudo yum install -y nvidia-container-toolkit 
```

#### Cấu hình Docker dùng driver Nvidia {#configure-docker-to-use-nvidia-driver}

```shell
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```

#### Khởi động container {#start-the-container}

```shell
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

> [!NOTE]
> Nếu bạn chạy trên hệ thống NVIDIA JetPack, Ollama không thể tự động phát hiện đúng phiên bản JetPack. Hãy truyền biến môi trường JETSON_JETPACK=5 hoặc JETSON_JETPACK=6 vào container để chọn phiên bản 5 hoặc 6.

### GPU AMD {#amd-gpus}

Để chạy Ollama bằng Docker với GPU AMD, dùng tag `rocm` và lệnh sau:

```shell
docker run -d --device /dev/kfd --device /dev/dri -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama:rocm
```

### Chạy mô hình cục bộ {#run-model-locally}

Bây giờ bạn có thể chạy một mô hình:

```shell
docker exec -it ollama ollama run llama3.2
```

### Thử các mô hình khác {#try-different-models}

Có thể tìm thêm mô hình trong [thư viện Ollama](https://ollama.com/library).