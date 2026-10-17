# Thông số kỹ thuật GPU NVIDIA {#nvidia-gpu-specifications}
## Nvidia {#nvidia}
Ollama hỗ trợ GPU Nvidia có compute capability 5.0 trở lên và driver phiên bản 531 trở lên.

Hãy kiểm tra compute capability của card để biết card có được hỗ trợ hay không:
[https://developer.nvidia.com/cuda-gpus](https://developer.nvidia.com/cuda-gpus)

| Compute Capability | Họ sản phẩm         | Các card                                                                                                    |
| ------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| 12.0               | GeForce RTX 50xx    | `RTX 5060` `RTX 5060 Ti` `RTX 5070` `RTX 5070 Ti` `RTX 5080` `RTX 5090`                                     |
|                    | NVIDIA Professioal  | `RTX PRO 4000 Blackwell` `RTX PRO 4500 Blackwell` `RTX PRO 5000 Blackwell` `RTX PRO 6000 Blackwell`         |
| 9.0                | NVIDIA              | `H200` `H100`                                                                                               |
| 8.9                | GeForce RTX 40xx    | `RTX 4090` `RTX 4080 SUPER` `RTX 4080` `RTX 4070 Ti SUPER` `RTX 4070 Ti` `RTX 4070 SUPER` `RTX 4070` `RTX 4060 Ti` `RTX 4060`  |
|                    | NVIDIA Professional | `L4` `L40` `RTX 6000`                                                                                       |
| 8.6                | GeForce RTX 30xx    | `RTX 3090 Ti` `RTX 3090` `RTX 3080 Ti` `RTX 3080` `RTX 3070 Ti` `RTX 3070` `RTX 3060 Ti` `RTX 3060` `RTX 3050 Ti` `RTX 3050`   |
|                    | NVIDIA Professional | `A40` `RTX A6000` `RTX A5000` `RTX A4000` `RTX A3000` `RTX A2000` `A10` `A16` `A2`                          |
| 8.0                | NVIDIA              | `A100` `A30`                                                                                                |
| 7.5                | GeForce GTX/RTX     | `GTX 1650 Ti` `TITAN RTX` `RTX 2080 Ti` `RTX 2080` `RTX 2070` `RTX 2060`                                    |
|                    | NVIDIA Professional | `T4` `RTX 5000` `RTX 4000` `RTX 3000` `T2000` `T1200` `T1000` `T600` `T500`                                 |
|                    | Quadro              | `RTX 8000` `RTX 6000` `RTX 5000` `RTX 4000`                                                                 |
| 7.0                | NVIDIA              | `TITAN V` `V100` `Quadro GV100`                                                                             |
| 6.1                | NVIDIA TITAN        | `TITAN Xp` `TITAN X`                                                                                        |
|                    | GeForce GTX         | `GTX 1080 Ti` `GTX 1080` `GTX 1070 Ti` `GTX 1070` `GTX 1060` `GTX 1050 Ti` `GTX 1050`                       |
|                    | Quadro              | `P6000` `P5200` `P4200` `P3200` `P5000` `P4000` `P3000` `P2200` `P2000` `P1000` `P620` `P600` `P500` `P520` |
|                    | Tesla               | `P40` `P4`                                                                                                  |
| 6.0                | NVIDIA              | `Tesla P100` `Quadro GP100`                                                                                 |
| 5.2                | GeForce GTX         | `GTX TITAN X` `GTX 980 Ti` `GTX 980` `GTX 970` `GTX 960` `GTX 950`                                          |
|                    | Quadro              | `M6000 24GB` `M6000` `M5000` `M5500M` `M4000` `M2200` `M2000` `M620`                                        |
|                    | Tesla               | `M60` `M40`                                                                                                 |
| 5.0                | GeForce GTX         | `GTX 750 Ti` `GTX 750` `NVS 810`                                                                            |
|                    | Quadro              | `K2200` `K1200` `K620` `M1200` `M520` `M5000M` `M4000M` `M3000M` `M2000M` `M1000M` `K620M` `M600M` `M500M`  |

Dùng khi build cục bộ để hỗ trợ các GPU cũ hơn.

### Chọn GPU {#gpu-selection}

Nếu hệ thống có nhiều GPU NVIDIA và bạn muốn giới hạn Ollama chỉ dùng
một phần trong số đó, hãy đặt `CUDA_VISIBLE_DEVICES` thành danh sách GPU phân tách bằng dấu phẩy.
Có thể dùng ID số, nhưng thứ tự có thể thay đổi nên UUID đáng tin cậy hơn.
Bạn có thể xem UUID của các GPU bằng lệnh `nvidia-smi -L`. Nếu muốn
bỏ qua GPU và buộc dùng CPU, hãy dùng ID GPU không hợp lệ (ví dụ "-1")

### Suspend/Resume trên Linux {#linux-suspend-resume}

Trên Linux, sau một chu kỳ suspend/resume, đôi khi Ollama không phát hiện được
GPU NVIDIA của bạn và chuyển sang chạy bằng CPU.  Bạn có thể khắc phục lỗi
driver này bằng cách nạp lại driver NVIDIA UVM với lệnh `sudo rmmod nvidia_uvm &&
sudo modprobe nvidia_uvm`

## AMD Radeon {#amd-radeon}
Ollama hỗ trợ các GPU AMD sau:

### Hỗ trợ trên Linux {#linux-support}
| Họ sản phẩm    | Card và bộ tăng tốc                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| AMD Radeon RX  | `7900 XTX` `7900 XT` `7900 GRE` `7800 XT` `7700 XT` `7600 XT` `7600` `6950 XT` `6900 XTX` `6900XT` `6800 XT` `6800` `Vega 64` `Vega 56`    |
| AMD Radeon PRO | `W7900` `W7800` `W7700` `W7600` `W7500` `W6900X` `W6800X Duo` `W6800X` `W6800` `V620` `V420` `V340` `V320` `Vega II Duo` `Vega II` `VII` `SSG` |
| AMD Instinct   | `MI300X` `MI300A` `MI300` `MI250X` `MI250` `MI210` `MI200` `MI100` `MI60` `MI50`                                                               |

### Hỗ trợ trên Windows {#windows-support}
Với ROCm v6.1, các GPU sau được hỗ trợ trên Windows.

| Họ sản phẩm    | Card và bộ tăng tốc                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| AMD Radeon RX  | `7900 XTX` `7900 XT` `7900 GRE` `7800 XT` `7700 XT` `7600 XT` `7600` `6950 XT` `6900 XTX` `6900XT` `6800 XT` `6800`    |
| AMD Radeon PRO | `W7900` `W7800` `W7700` `W7600` `W7500` `W6900X` `W6800X Duo` `W6800X` `W6800` `V620` |


### Ghi đè trên Linux {#overrides-on-linux}
Ollama dùng thư viện AMD ROCm, thư viện này không hỗ trợ mọi GPU AMD. Trong
một số trường hợp, bạn có thể buộc hệ thống thử dùng một LLVM target tương tự và
gần nhất.  Ví dụ Radeon RX 5400 là `gfx1034` (còn gọi là 10.3.4)
nhưng ROCm hiện chưa hỗ trợ target này. Target được hỗ trợ gần nhất là
`gfx1030`.  Bạn có thể dùng biến môi trường `HSA_OVERRIDE_GFX_VERSION` với
cú pháp `x.y.z`.  Chẳng hạn, để buộc hệ thống chạy trên RX 5400, bạn
sẽ đặt `HSA_OVERRIDE_GFX_VERSION="10.3.0"` làm biến môi trường cho
máy chủ.  Nếu có GPU AMD không được hỗ trợ, bạn có thể thử nghiệm bằng danh sách
các loại được hỗ trợ bên dưới.

Nếu có nhiều GPU với phiên bản GFX khác nhau, hãy thêm số thứ tự thiết bị
vào biến môi trường để đặt riêng cho từng GPU.  Ví dụ,
`HSA_OVERRIDE_GFX_VERSION_0=10.3.0` và  `HSA_OVERRIDE_GFX_VERSION_1=11.0.0`

Hiện tại, các loại GPU được hỗ trợ đã biết trên Linux là các LLVM Target sau.
Bảng này cho thấy một số GPU ví dụ ứng với các LLVM target này:
| **LLVM Target** | **GPU ví dụ** |
|-----------------|---------------------|
| gfx900 | Radeon RX Vega 56 |
| gfx906 | Radeon Instinct MI50 |
| gfx908 | Radeon Instinct MI100 |
| gfx90a | Radeon Instinct MI210 |
| gfx940 | Radeon Instinct MI300 |
| gfx941 | |
| gfx942 | |
| gfx1030 | Radeon PRO V620 |
| gfx1100 | Radeon PRO W7900 |
| gfx1101 | Radeon PRO W7700 |
| gfx1102 | Radeon RX 7600 |

AMD đang cải thiện ROCm v6 để mở rộng hỗ trợ cho nhiều họ GPU hơn trong một
bản phát hành tương lai, giúp hỗ trợ thêm nhiều GPU.

Hãy liên hệ trên [Discord](https://discord.gg/ollama) hoặc tạo
[issue](https://github.com/ollama/ollama/issues) để được trợ giúp thêm.

### Chọn GPU {#gpu-selection-1}

Nếu hệ thống có nhiều GPU AMD và bạn muốn giới hạn Ollama chỉ dùng một
phần trong số đó, hãy đặt `ROCR_VISIBLE_DEVICES` thành danh sách GPU phân tách bằng dấu phẩy.
Bạn có thể xem danh sách thiết bị bằng `rocminfo`.  Nếu muốn bỏ qua GPU
và buộc dùng CPU, hãy dùng ID GPU không hợp lệ (ví dụ "-1").  Khi có sẵn, hãy dùng
`Uuid` để xác định duy nhất thiết bị thay vì giá trị số.

### Quyền của container {#container-permission}

Trên một số bản phân phối Linux, SELinux có thể ngăn container
truy cập các thiết bị GPU AMD.  Trên máy chủ, bạn có thể chạy 
`sudo setsebool container_use_devices=1` để cho phép container dùng thiết bị.

### Metal (GPU của Apple) {#metal-apple-gpus}
Ollama hỗ trợ tăng tốc GPU trên các thiết bị Apple thông qua API Metal.