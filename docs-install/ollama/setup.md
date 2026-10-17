# Hướng dẫn cài đặt {#installation-instructions}

## 1️⃣ Chuẩn bị máy chủ {#1️⃣-prepare-the-server}
- Cập nhật hệ thống:
```bash
sudo apt update && sudo apt upgrade -y
```

## 2️⃣ Cài đặt driver NVIDIA và CUDA {#2️⃣-install-nvidia-driver-and-cuda}
- Cài đặt driver NVIDIA và CUDA toolkit:
```bash
sudo apt install -y nvidia-driver-535 nvidia-cuda-toolkit
```
- Kiểm tra GPU:
```bash
nvidia-smi
```
- **Kết quả mong đợi**: bảng thông tin GPU hiện ra.
- **Lỗi nếu không tìm thấy GPU**: driver có thể chưa được cài đúng hoặc máy chủ cần khởi động lại:
```bash
sudo reboot
```
- **Cách khắc phục**: nếu `nvidia-smi` vẫn không chạy, hãy kiểm tra phiên bản driver phù hợp với GPU của bạn:
```bash
sudo apt install -y nvidia-driver-<version>
```