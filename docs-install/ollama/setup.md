# Installation Instructions

## 1️⃣ Prepare the server
- Update the system:
```bash
sudo apt update && sudo apt upgrade -y
```

## 2️⃣ Install NVIDIA driver and CUDA
- Install NVIDIA driver and CUDA toolkit:
```bash
sudo apt install -y nvidia-driver-535 nvidia-cuda-toolkit
```
- Check the GPU:
```bash
nvidia-smi
```
- **Expected result**: The GPU information panel appears.
- **Error if GPU not found**: The driver may not be installed correctly or the server needs to be restarted:
```bash
sudo reboot
```
- **Error Fix**: If `nvidia-smi` still doesn't work, check the driver version that matches your GPU:
```bash
sudo apt install -y nvidia-driver-<version>
```