# Phát triển {#development}

Cài đặt các điều kiện tiên quyết:

- [Go](https://go.dev/doc/install)
- Trình biên dịch C/C++, ví dụ Clang trên macOS, [TDM-GCC](https://github.com/jmeubank/tdm-gcc/releases/latest) (Windows amd64) hoặc [llvm-mingw](https://github.com/mstorsjo/llvm-mingw) (Windows arm64), GCC/Clang trên Linux.

Sau đó build và chạy Ollama từ thư mục gốc của kho mã nguồn:

```shell
go run . serve
```

## macOS (Apple Silicon) {#macos-apple-silicon}

macOS Apple Silicon hỗ trợ Metal, đã được tích hợp sẵn trong tệp nhị phân Ollama. Không cần thêm bước nào.

## macOS (Intel) {#macos-intel}

Cài đặt các điều kiện tiên quyết:

- [CMake](https://cmake.org/download/) hoặc `brew install cmake`

Sau đó cấu hình và build dự án:

```shell
cmake -B build
cmake --build build
```

Cuối cùng, chạy Ollama:

```shell
go run . serve
```

## Windows {#windows}

Cài đặt các điều kiện tiên quyết:

- [CMake](https://cmake.org/download/)
- [Visual Studio 2022](https://visualstudio.microsoft.com/downloads/) kèm Native Desktop Workload
- (Tùy chọn) Hỗ trợ GPU AMD
    - [ROCm](https://rocm.docs.amd.com/en/latest/)
    - [Ninja](https://github.com/ninja-build/ninja/releases)
- (Tùy chọn) Hỗ trợ GPU NVIDIA
    - [CUDA SDK](https://developer.nvidia.com/cuda-downloads?target_os=Windows&target_arch=x86_64&target_version=11&target_type=exe_network)

Sau đó cấu hình và build dự án:

```shell
cmake -B build
cmake --build build --config Release
```

> [!IMPORTANT]
> Build cho ROCm cần thêm các cờ sau:
> ```
> cmake -B build -G Ninja -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++
> cmake --build build --config Release
> ```


Cuối cùng, chạy Ollama:

```shell
go run . serve
```

## Windows (ARM) {#windows-arm}

Windows ARM hiện chưa hỗ trợ các thư viện tăng tốc bổ sung.  Không dùng cmake, chỉ cần `go run` hoặc `go build`.

## Linux {#linux}

Cài đặt các điều kiện tiên quyết:

- [CMake](https://cmake.org/download/) hoặc `sudo apt install cmake` hoặc `sudo dnf install cmake`
- (Tùy chọn) Hỗ trợ GPU AMD
    - [ROCm](https://rocm.docs.amd.com/projects/install-on-linux/en/latest/install/quick-start.html)
- (Tùy chọn) Hỗ trợ GPU NVIDIA
    - [CUDA SDK](https://developer.nvidia.com/cuda-downloads)

> [!IMPORTANT]
> Bảo đảm các điều kiện tiên quyết nằm trong `PATH` trước khi chạy CMake.


Sau đó cấu hình và build dự án:

```shell
cmake -B build
cmake --build build
```

Cuối cùng, chạy Ollama:

```shell
go run . serve
```

## Docker {#docker}

```shell
docker build .
```

### ROCm {#rocm}

```shell
docker build --build-arg FLAVOR=rocm .
```

## Chạy kiểm thử {#running-tests}

Để chạy kiểm thử, dùng `go test`:

```shell
go test ./...
```

> LƯU Ý: trong một số trường hợp hiếm, bạn có thể cần thay đổi một gói dùng
> gói "synctest" mới trong go1.24.
>
> Nếu bạn chưa bật gói "synctest", bạn sẽ không thấy lỗi build hoặc
> lỗi kiểm thử do thay đổi của mình gây ra (nếu có) ở máy cục bộ, nhưng CI
> sẽ bị lỗi.
>
> Nếu thấy lỗi trong CI, bạn có thể tiếp tục đẩy thay đổi để xem CI
> build có qua không, hoặc bật gói "synctest" ở máy cục bộ để xem
> lỗi trước khi đẩy.
>
> Để bật gói "synctest" khi kiểm thử, chạy lệnh sau:
>
> ```shell
> GOEXPERIMENT=synctest go test ./...
> ```
>
> Nếu muốn bật synctest cho mọi lệnh go, bạn có thể đặt biến môi trường
> `GOEXPERIMENT` trong hồ sơ shell hoặc dùng:
>
> ```shell
> go env -w GOEXPERIMENT=synctest
> ```
>
> Lệnh này sẽ bật gói "synctest" cho mọi lệnh go mà không cần đặt
> cho từng phiên shell.
>
> Gói synctest không bắt buộc cho các bản build production.

## Phát hiện thư viện {#library-detection}

Ollama tìm các thư viện tăng tốc trong các đường dẫn sau, tính tương đối so với tệp thực thi `ollama`:

* `./lib/ollama` (Windows)
* `../lib/ollama` (Linux)
* `.` (macOS)
* `build/lib/ollama` (khi phát triển)

Nếu không tìm thấy thư viện, Ollama sẽ không chạy với bất kỳ thư viện tăng tốc nào.