# Khắc phục sự cố

## Lỗi driver NVIDIA {#nvidia-driver-error}
- Kiểm tra driver:
```bash
nvidia-smi
```
- Cài lại driver:
```bash
sudo apt install -y nvidia-driver-<version>
```

## Lỗi Docker không nhận GPU {#error-docker-not-recognizing-gpu}
- Kiểm tra NVIDIA Container Toolkit:
```bash
docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi
```
- Cài lại toolkit nếu cần:
```bash
sudo apt install -y nvidia-container-toolkit
sudo systemctl restart docker
```

## Lỗi OpenWebUI không kết nối được với Ollama {#error-openwebui-not-connecting-to-ollama}
- Kiểm tra trạng thái container:
```bash
docker ps
```
- Kiểm tra log:
```bash
docker logs openwebui
```
- Bảo đảm `OLLAMA_API_BASE` trong `.env` khớp với địa chỉ của container `ollama`.

## Lỗi nạp mô hình chậm {#slow-model-loading-error}
- Kiểm tra kết nối mạng.
- Tăng giới hạn tài nguyên trong `docker-compose.yml` (ví dụ `cpus: "8"`, `memory: 32g`).
Đôi khi Ollama hoạt động không như mong đợi. Một trong những cách tốt nhất để tìm hiểu chuyện gì đã xảy ra là xem log. Trên **Mac**, tìm log bằng lệnh:

```shell
cat ~/.ollama/logs/server.log
```

Trên các hệ thống **Linux** dùng systemd, có thể xem log bằng lệnh sau:

```shell
journalctl -u ollama --no-pager --follow --pager-end
```

Khi chạy Ollama trong **container**, log được ghi ra stdout/stderr của container:

```shell
docker logs <container-name>
```

(Dùng `docker ps` để tìm tên container)

Nếu chạy `ollama serve` thủ công trong terminal, log sẽ hiện trên terminal đó.

Khi chạy Ollama trên **Windows**, có một vài vị trí khác nhau. Bạn có thể xem chúng trong cửa sổ explorer bằng cách nhấn `<cmd>+R` và nhập:
- `explorer %LOCALAPPDATA%\Ollama` để xem log. Log máy chủ gần nhất nằm trong `server.log` và log cũ hơn nằm trong `server-#.log`
- `explorer %LOCALAPPDATA%\Programs\Ollama` để duyệt các tệp nhị phân (trình cài đặt thêm đường dẫn này vào PATH của người dùng)
- `explorer %HOMEPATH%\.ollama` để duyệt nơi lưu mô hình và cấu hình

Để bật thêm log gỡ lỗi giúp khắc phục sự cố, trước tiên hãy **thoát ứng dụng đang chạy từ menu khay hệ thống**, sau đó trong terminal powershell

```powershell
$env:OLLAMA_DEBUG="1"
& "ollama app.exe"
```

Hãy tham gia [Discord](https://discord.gg/ollama) để được giúp đọc log.

## Thư viện LLM {#llm-libraries}

Ollama có nhiều thư viện LLM được biên dịch cho các GPU và tính năng vector CPU khác nhau. Ollama cố chọn thư viện tốt nhất dựa trên khả năng của hệ thống. Nếu việc tự phát hiện này gặp vấn đề, hoặc bạn gặp các vấn đề khác (ví dụ GPU bị crash), bạn có thể khắc phục bằng cách buộc dùng một thư viện LLM cụ thể. `cpu_avx2` cho hiệu năng tốt nhất, tiếp theo là `cpu_avx`, còn `cpu` chậm nhất nhưng tương thích nhất. Giả lập Rosetta trên MacOS sẽ hoạt động với thư viện `cpu`.

Trong log máy chủ, bạn sẽ thấy một thông báo có dạng như sau (thay đổi tùy bản phát hành):

```
Dynamic LLM libraries [rocm_v6 cpu cpu_avx cpu_avx2 cuda_v12 rocm_v5]
```

**Ghi đè thư viện LLM (thử nghiệm)**

Bạn có thể đặt OLLAMA_LLM_LIBRARY thành bất kỳ thư viện LLM khả dụng nào để bỏ qua tự phát hiện. Ví dụ, nếu có card CUDA nhưng muốn buộc dùng thư viện LLM CPU có hỗ trợ vector AVX2, hãy dùng:

```shell
OLLAMA_LLM_LIBRARY="cpu_avx2" ollama serve
```

Bạn có thể xem CPU của mình có những tính năng nào bằng lệnh sau.

```shell
cat /proc/cpuinfo| grep flags | head -1
```

## Cài các phiên bản cũ hoặc phát hành thử trên Linux {#installing-older-or-pre-release-versions-on-linux}

Nếu gặp sự cố trên Linux và muốn cài phiên bản cũ hơn, hoặc muốn thử một bản phát hành thử trước khi chính thức phát hành, bạn có thể chỉ định cho script cài đặt phiên bản cần cài.

```shell
curl -fsSL https://ollama.com/install.sh | OLLAMA_VERSION=0.5.7 sh
```

## Docker trên Linux {#linux-docker}

Nếu ban đầu Ollama chạy trên GPU trong container docker nhưng sau một thời gian lại chuyển sang chạy trên CPU, kèm lỗi trong log máy chủ báo không phát hiện được GPU, có thể khắc phục bằng cách tắt quản lý cgroup của systemd trong Docker. Hãy sửa `/etc/docker/daemon.json` trên máy chủ và thêm `"exec-opts": ["native.cgroupdriver=cgroupfs"]` vào cấu hình docker.

## Phát hiện GPU NVIDIA {#nvidia-gpu-discovery}

Khi Ollama khởi động, nó kiểm kê các GPU có trong hệ thống để xác định khả năng tương thích và lượng VRAM khả dụng. Đôi khi việc phát hiện này không tìm thấy GPU của bạn. Nhìn chung, chạy driver mới nhất sẽ cho kết quả tốt nhất.

### Khắc phục sự cố NVIDIA trên Linux {#linux-nvidia-troubleshooting}

Nếu bạn dùng container để chạy Ollama, hãy bảo đảm đã thiết lập container runtime trước như mô tả trong [docker.md]
Đôi khi Ollama gặp khó khăn khi khởi tạo GPU. Khi kiểm tra log máy chủ, điều này có thể hiện ra bằng nhiều mã lỗi khác nhau như "3" (chưa khởi tạo), "46" (thiết bị không khả dụng), "100" (không có thiết bị), "999" (không xác định) hoặc các mã khác. Các kỹ thuật khắc phục sau có thể giúp giải quyết vấn đề

- Nếu bạn dùng container, container runtime có hoạt động không? Hãy thử `docker run --gpus all ubuntu nvidia-smi` - nếu lệnh này không chạy, Ollama sẽ không thấy GPU NVIDIA của bạn. - Driver uvm đã được nạp chưa?
`sudo nvidia-modprobe -u`
- Thử nạp lại driver nvidia_uvm - `sudo rmmod nvidia_uvm` rồi `sudo modprobe nvidia_uvm`
- Thử khởi động lại máy
- Bảo đảm bạn đang chạy driver nvidia mới nhất

Nếu không cách nào ở trên giải quyết được vấn đề, hãy thu thập thêm thông tin và tạo issue:
- Đặt `CUDA_ERROR_LEVEL=50` và thử lại để có thêm log chẩn đoán
- Kiểm tra dmesg xem có lỗi nào không `sudo dmesg | grep -i nvrm` và `sudo dmesg | grep -i nvidia`


## Phát hiện GPU AMD {#amd-gpu-discovery}

Trên linux, việc truy cập GPU AMD thường yêu cầu tư cách thành viên của nhóm `video` và/hoặc `render` để truy cập thiết bị `/dev/kfd`. Nếu quyền chưa được thiết lập đúng, Ollama sẽ phát hiện điều này và báo lỗi trong log máy chủ.

Khi chạy trong container, trên một số bản phân phối Linux và container runtime, tiến trình ollama có thể không truy cập được GPU. Hãy dùng `ls -lnd /dev/kfd /dev/dri /dev/dri/*` trên máy chủ để xác định các ID nhóm **dạng số** trên hệ thống, rồi truyền thêm các tham số `--group-add ...` cho container để nó truy cập được các thiết bị cần thiết. Ví dụ, trong kết quả sau `crw-rw---- 1 0 44 226, 0 Sep 16 16:55 /dev/dri/card0` cột ID nhóm là `44`

Nếu bạn gặp sự cố khi để Ollama phát hiện hoặc dùng GPU đúng cách cho suy luận, các gợi ý sau có thể giúp xác định lỗi.
- `AMD_LOG_LEVEL=3` Bật các mức log thông tin trong thư viện AMD HIP/ROCm. Việc này có thể giúp hiển thị mã lỗi chi tiết hơn để khắc phục sự cố
- `OLLAMA_DEBUG=1` Trong quá trình phát hiện GPU sẽ báo cáo thêm thông tin
- Kiểm tra dmesg xem có lỗi nào từ driver amdgpu hoặc kfd không `sudo dmesg | grep -i amdgpu` và `sudo dmesg | grep -i kfd`

## Nhiều GPU AMD {#multiple-amd-gpus}

Nếu bạn nhận được phản hồi vô nghĩa khi mô hình được nạp trên nhiều GPU AMD trên Linux, hãy xem hướng dẫn sau.

- https://rocm.docs.amd.com/projects/radeon/en/latest/docs/install/native_linux/mgpu.html#mgpu-known-issues-and-limitations

## Lỗi terminal trên Windows {#windows-terminal-errors}

Các phiên bản Windows 10 cũ (ví dụ 21H1) được biết là có lỗi khiến chương trình terminal chuẩn không hiển thị đúng các ký tự điều khiển. Điều này có thể dẫn đến việc hiển thị một chuỗi dài như `←[?25h←[?25l`, đôi khi kèm lỗi `The parameter is incorrect`. Để khắc phục, hãy cập nhật lên Win 10 22H1 trở lên.