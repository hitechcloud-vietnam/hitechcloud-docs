# Câu hỏi thường gặp {#faq}

## Làm sao để nâng cấp Ollama? {#how-can-i-upgrade-ollama}

Ollama trên macOS và Windows sẽ tự động tải bản cập nhật. Nhấp vào biểu tượng trên thanh tác vụ hoặc thanh menu rồi nhấp "Restart to update" để áp dụng bản cập nhật. Cũng có thể cài bản cập nhật bằng cách tải phiên bản mới nhất [thủ công](https://ollama.com/download/).

Trên Linux, hãy chạy lại script cài đặt:

```shell
curl -fsSL https://ollama.com/install.sh | sh
```

## Làm sao để xem log? {#how-can-i-view-the-logs}

Xem phần [Khắc phục sự cố]

## GPU của tôi có tương thích với Ollama không? {#is-my-gpu-compatible-with-ollama}

Vui lòng xem [tài liệu về GPU].

## Làm sao để chỉ định kích thước cửa sổ ngữ cảnh? {#how-can-i-specify-the-context-window-size}

Theo mặc định, Ollama dùng cửa sổ ngữ cảnh 4096 token cho hầu hết các mô hình. Mô hình `gpt-oss` có cửa sổ ngữ cảnh mặc định là 8192 token.

Giá trị này có thể được ghi đè trong Settings của ứng dụng Windows và macOS, hoặc bằng biến môi trường `OLLAMA_CONTEXT_LENGTH`. Ví dụ, để đặt cửa sổ ngữ cảnh mặc định là 8K, hãy dùng:

```shell
OLLAMA_CONTEXT_LENGTH=8192 ollama serve
```

Để thay đổi khi dùng `ollama run`, dùng `/set parameter`:

```shell
/set parameter num_ctx 4096
```

Khi dùng API, hãy chỉ định tham số `num_ctx`:

```shell
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Why is the sky blue?",
  "options": {
    "num_ctx": 4096
  }
}'
```

Đặt độ dài ngữ cảnh cao hơn có thể khiến mô hình không vừa trong GPU, làm mô hình chạy chậm hơn.

## Làm sao để biết mô hình đã được nạp vào GPU chưa? {#how-can-i-tell-if-my-model-was-loaded-onto-the-gpu}

Dùng lệnh `ollama ps` để xem các mô hình hiện đang được nạp vào bộ nhớ.

```shell
ollama ps
```

> **Kết quả**:
>
> ```
> NAME           ID              SIZE     PROCESSOR    CONTEXT    UNTIL
> gpt-oss:20b    05afbac4bad6    16 GB    100% GPU     8192       4 minutes from now
> ```

Cột `Processor` cho biết mô hình được nạp vào loại bộ nhớ nào:
* `100% GPU` nghĩa là mô hình được nạp hoàn toàn vào GPU
* `100% CPU` nghĩa là mô hình được nạp hoàn toàn vào bộ nhớ hệ thống
* `48%/52% CPU/GPU` nghĩa là mô hình được nạp một phần vào GPU và một phần vào bộ nhớ hệ thống

## Làm sao để cấu hình máy chủ Ollama? {#how-do-i-configure-ollama-server}

Máy chủ Ollama có thể được cấu hình bằng biến môi trường.

### Đặt biến môi trường trên Mac {#setting-environment-variables-on-mac}

Nếu Ollama chạy dưới dạng ứng dụng macOS, biến môi trường cần được đặt bằng `launchctl`:

1. Với mỗi biến môi trường, gọi `launchctl setenv`.

    ```bash
    launchctl setenv OLLAMA_HOST "0.0.0.0:11434"
    ```

2. Khởi động lại ứng dụng Ollama.

### Đặt biến môi trường trên Linux {#setting-environment-variables-on-linux}

Nếu Ollama chạy dưới dạng dịch vụ systemd, biến môi trường cần được đặt bằng `systemctl`:

1. Sửa dịch vụ systemd bằng cách gọi `systemctl edit ollama.service`. Lệnh này sẽ mở một trình soạn thảo.

2. Với mỗi biến môi trường, thêm một dòng `Environment` trong mục `[Service]`:

    ```ini
    [Service]
    Environment="OLLAMA_HOST=0.0.0.0:11434"
    ```

3. Lưu và thoát.

4. Nạp lại `systemd` và khởi động lại Ollama:

   ```shell
   systemctl daemon-reload
   systemctl restart ollama
   ```

### Đặt biến môi trường trên Windows {#setting-environment-variables-on-windows}

Trên Windows, Ollama kế thừa các biến môi trường của người dùng và của hệ thống.

1. Trước tiên thoát Ollama bằng cách nhấp vào nó trên thanh tác vụ.

2. Mở ứng dụng Settings (Windows 11) hoặc Control Panel (Windows 10) và tìm _environment variables_.

3. Nhấp _Edit environment variables for your account_.

4. Sửa hoặc tạo biến mới cho tài khoản người dùng của bạn với `OLLAMA_HOST`, `OLLAMA_MODELS`, v.v.

5. Nhấp OK/Apply để lưu.

6. Khởi động ứng dụng Ollama từ menu Start của Windows.

## Làm sao để dùng Ollama sau proxy? {#how-do-i-use-ollama-behind-a-proxy}

Ollama tải mô hình từ Internet và có thể cần máy chủ proxy để truy cập các mô hình. Dùng `HTTPS_PROXY` để chuyển hướng các yêu cầu đi ra qua proxy. Bảo đảm chứng chỉ của proxy đã được cài dưới dạng chứng chỉ hệ thống. Xem phần trên để biết cách dùng biến môi trường trên nền tảng của bạn.

> [!NOTE]
> Tránh đặt `HTTP_PROXY`. Ollama không dùng HTTP để tải mô hình, chỉ dùng HTTPS. Đặt `HTTP_PROXY` có thể làm gián đoạn kết nối của client tới máy chủ.

### Làm sao để dùng Ollama sau proxy trong Docker? {#how-do-i-use-ollama-behind-a-proxy-in-docker}

Docker image của Ollama có thể được cấu hình dùng proxy bằng cách truyền `-e HTTPS_PROXY=https://proxy.example.com` khi khởi động container.

Hoặc có thể cấu hình Docker daemon dùng proxy. Có hướng dẫn cho Docker Desktop trên [macOS](https://docs.docker.com/desktop/settings/mac/#proxies), [Windows](https://docs.docker.com/desktop/settings/windows/#proxies) và [Linux](https://docs.docker.com/desktop/settings/linux/#proxies), và cho Docker [daemon với systemd](https://docs.docker.com/config/daemon/systemd/#httphttps-proxy).

Bảo đảm chứng chỉ đã được cài dưới dạng chứng chỉ hệ thống khi dùng HTTPS. Việc này có thể cần một Docker image mới khi dùng chứng chỉ tự ký.

```dockerfile
FROM ollama/ollama
COPY my-ca.pem /usr/local/share/ca-certificates/my-ca.crt
RUN update-ca-certificates
```

Build và chạy image này:

```shell
docker build -t ollama-with-ca .
docker run -d -e HTTPS_PROXY=https://my.proxy.example.com -p 11434:11434 ollama-with-ca
```

## Ollama có gửi prompt và phản hồi của tôi về ollama.com không? {#does-ollama-send-my-prompts-and-responses-back-to-ollamacom}

Nếu bạn chạy mô hình cục bộ, prompt và phản hồi của bạn luôn nằm trên máy của bạn. Ollama Turbo trong ứng dụng cho phép chạy truy vấn trên máy chủ của Ollama nếu bạn không có GPU đủ mạnh. Tìm kiếm web cho phép mô hình truy vấn web, giúp bạn có thông tin chính xác và cập nhật hơn. Cả Turbo và tìm kiếm web đều yêu cầu gửi prompt và phản hồi của bạn tới Ollama.com. Dữ liệu này không được ghi log cũng như không được lưu trữ.

Nếu không muốn thấy các tùy chọn Turbo và tìm kiếm web trong ứng dụng, bạn có thể tắt chúng trong Settings bằng cách bật chế độ Airplane. Trong chế độ Airplane, mọi mô hình đều chạy cục bộ, và prompt cùng phản hồi của bạn sẽ ở lại trên máy của bạn.

## Làm sao để mở Ollama ra mạng của tôi? {#how-can-i-expose-ollama-on-my-network}

Theo mặc định Ollama bind 127.0.0.1 cổng 11434. Thay đổi địa chỉ bind bằng biến môi trường `OLLAMA_HOST`.

Xem phần [ở trên](#how-do-i-configure-ollama-server) để biết cách đặt biến môi trường trên nền tảng của bạn.

## Làm sao để dùng Ollama với máy chủ proxy? {#how-can-i-use-ollama-with-a-proxy-server}

Ollama chạy một máy chủ HTTP và có thể được mở ra ngoài bằng máy chủ proxy như Nginx. Để làm vậy, hãy cấu hình proxy chuyển tiếp các yêu cầu và tùy chọn đặt các header cần thiết (nếu không mở Ollama ra mạng). Ví dụ với Nginx:

```nginx
server {
    listen 80;
    server_name example.com;  # Replace with your domain or IP
    location / {
        proxy_pass http://localhost:11434;
        proxy_set_header Host localhost:11434;
    }
}
```

## Làm sao để dùng Ollama với ngrok? {#how-can-i-use-ollama-with-ngrok}

Có thể truy cập Ollama bằng nhiều công cụ đường hầm (tunneling). Ví dụ với Ngrok:

```shell
ngrok http 11434 --host-header="localhost:11434"
```

## Làm sao để dùng Ollama với Cloudflare Tunnel? {#how-can-i-use-ollama-with-cloudflare-tunnel}

Để dùng Ollama với Cloudflare Tunnel, hãy dùng các cờ `--url` và `--http-host-header`:

```shell
cloudflared tunnel --url http://localhost:11434 --http-host-header="localhost:11434"
```

## Làm sao để cho phép thêm các web origin truy cập Ollama? {#how-can-i-allow-additional-web-origins-to-access-ollama}

Theo mặc định Ollama cho phép các yêu cầu cross-origin từ `127.0.0.1` và `0.0.0.0`. Có thể cấu hình thêm origin bằng `OLLAMA_ORIGINS`.

Với tiện ích mở rộng trình duyệt, bạn cần cho phép rõ ràng mẫu origin của tiện ích. Hãy đặt `OLLAMA_ORIGINS` để bao gồm `chrome-extension://*`, `moz-extension://*` và `safari-web-extension://*` nếu muốn cho phép mọi tiện ích mở rộng truy cập, hoặc các tiện ích cụ thể tùy nhu cầu:

```
# Allow all Chrome, Firefox, and Safari extensions
OLLAMA_ORIGINS=chrome-extension://*,moz-extension://*,safari-web-extension://* ollama serve
```

Xem phần [ở trên](#how-do-i-configure-ollama-server) để biết cách đặt biến môi trường trên nền tảng của bạn.

## Mô hình được lưu ở đâu? {#where-are-models-stored}

- macOS: `~/.ollama/models`
- Linux: `/usr/share/ollama/.ollama/models`
- Windows: `C:\Users\%username%\.ollama\models`

### Làm sao để đặt sang vị trí khác? {#how-do-i-set-them-to-a-different-location}

Nếu cần dùng thư mục khác, hãy đặt biến môi trường `OLLAMA_MODELS` thành thư mục đã chọn.

> Lưu ý: trên Linux dùng trình cài đặt chuẩn, người dùng `ollama` cần có quyền đọc và ghi trên thư mục được chỉ định. Để gán thư mục cho người dùng `ollama`, chạy `sudo chown -R ollama:ollama <directory>`.

Xem phần [ở trên](#how-do-i-configure-ollama-server) để biết cách đặt biến môi trường trên nền tảng của bạn.

## Làm sao để dùng Ollama trong Visual Studio Code? {#how-can-i-use-ollama-in-visual-studio-code}

Đã có một bộ sưu tập lớn các plugin cho VSCode cũng như các trình soạn thảo khác tận dụng Ollama. Xem danh sách [tiện ích mở rộng & plugin](https://github.com/ollama/ollama#extensions--plugins) ở cuối tệp readme của kho mã nguồn chính.

## Làm sao để dùng Ollama với tăng tốc GPU trong Docker? {#how-do-i-use-ollama-with-gpu-acceleration-in-docker}

Docker container của Ollama có thể được cấu hình tăng tốc GPU trên Linux hoặc Windows (với WSL2). Việc này yêu cầu [nvidia-container-toolkit](https://github.com/NVIDIA/nvidia-container-toolkit). Xem [ollama/ollama](https://hub.docker.com/r/ollama/ollama) để biết thêm chi tiết.

Tăng tốc GPU không khả dụng cho Docker Desktop trên macOS do thiếu khả năng truyền thẳng (passthrough) và giả lập GPU.

## Vì sao mạng chậm trong WSL2 trên Windows 10? {#why-is-networking-slow-in-wsl2-on-windows-10}

Điều này có thể ảnh hưởng cả việc cài Ollama lẫn việc tải mô hình.

Mở `Control Panel > Networking and Internet > View network status and tasks` và nhấp `Change adapter settings` ở bảng bên trái. Tìm adapter `vEthernel (WSL)`, nhấp chuột phải và chọn `Properties`.
Nhấp `Configure` và mở tab `Advanced`. Tìm qua từng thuộc tính cho đến khi thấy `Large Send Offload Version 2 (IPv4)` và `Large Send Offload Version 2 (IPv6)`. *Tắt* cả hai
thuộc tính này.

## Làm sao để nạp trước một mô hình vào Ollama để có thời gian phản hồi nhanh hơn? {#how-can-i-preload-a-model-into-ollama-to-get-faster-response-times}

Nếu dùng API, bạn có thể nạp trước một mô hình bằng cách gửi một yêu cầu rỗng tới máy chủ Ollama. Cách này hoạt động với cả hai endpoint API `/api/generate` và `/api/chat`.

Để nạp trước mô hình mistral bằng endpoint generate, hãy dùng:

```shell
curl http://localhost:11434/api/generate -d '{"model": "mistral"}'
```

Để dùng endpoint chat completions, hãy dùng:

```shell
curl http://localhost:11434/api/chat -d '{"model": "mistral"}'
```

Để nạp trước một mô hình bằng CLI, hãy dùng lệnh:

```shell
ollama run llama3.2 ""
```

## Làm sao để giữ mô hình trong bộ nhớ hoặc gỡ nó ra ngay lập tức? {#how-do-i-keep-a-model-loaded-in-memory-or-make-it-unload-immediately}

Theo mặc định các mô hình được giữ trong bộ nhớ 5 phút trước khi bị gỡ ra. Điều này cho phép phản hồi nhanh hơn nếu bạn gửi nhiều yêu cầu tới LLM. Nếu muốn gỡ ngay một mô hình khỏi bộ nhớ, hãy dùng lệnh `ollama stop`:

```shell
ollama stop llama3.2
```

Nếu dùng API, hãy dùng tham số `keep_alive` với các endpoint `/api/generate` và `/api/chat` để đặt khoảng thời gian mô hình ở lại trong bộ nhớ. Tham số `keep_alive` có thể đặt là:
* một chuỗi khoảng thời gian (như "10m" hoặc "24h")
* một số giây (như 3600)
* bất kỳ số âm nào, nghĩa là giữ mô hình trong bộ nhớ (ví dụ -1 hoặc "-1m")
* '0' nghĩa là gỡ mô hình ngay sau khi tạo xong phản hồi

Ví dụ, để nạp trước một mô hình và giữ nó trong bộ nhớ, hãy dùng:

```shell
curl http://localhost:11434/api/generate -d '{"model": "llama3.2", "keep_alive": -1}'
```

Để gỡ mô hình và giải phóng bộ nhớ, hãy dùng:

```shell
curl http://localhost:11434/api/generate -d '{"model": "llama3.2", "keep_alive": 0}'
```

Ngoài ra, bạn có thể thay đổi khoảng thời gian tất cả các mô hình ở trong bộ nhớ bằng cách đặt biến môi trường `OLLAMA_KEEP_ALIVE` khi khởi động máy chủ Ollama. Biến `OLLAMA_KEEP_ALIVE` dùng các kiểu tham số giống tham số `keep_alive` nêu trên. Xem phần giải thích [cách cấu hình máy chủ Ollama](#how-do-i-configure-ollama-server) để đặt đúng biến môi trường.

Tham số API `keep_alive` với các endpoint API `/api/generate` và `/api/chat` sẽ ghi đè cài đặt `OLLAMA_KEEP_ALIVE`.

## Làm sao để quản lý số yêu cầu tối đa mà máy chủ Ollama có thể xếp hàng? {#how-do-i-manage-the-maximum-number-of-requests-the-ollama-server-can-queue}

Nếu gửi quá nhiều yêu cầu tới máy chủ, máy chủ sẽ phản hồi lỗi 503 cho biết nó đang quá tải.  Bạn có thể điều chỉnh số yêu cầu được xếp hàng bằng cách đặt `OLLAMA_MAX_QUEUE`.

## Ollama xử lý các yêu cầu đồng thời như thế nào? {#how-does-ollama-handle-concurrent-requests}

Ollama hỗ trợ hai cấp xử lý đồng thời.  Nếu hệ thống có đủ bộ nhớ khả dụng (bộ nhớ hệ thống khi suy luận bằng CPU, hoặc VRAM khi suy luận bằng GPU) thì nhiều mô hình có thể được nạp cùng lúc.  Với một mô hình nhất định, nếu có đủ bộ nhớ khả dụng khi nạp mô hình, có thể cấu hình cho phép xử lý song song các yêu cầu.

Nếu không đủ bộ nhớ khả dụng để nạp một yêu cầu mô hình mới trong khi một hoặc nhiều mô hình đã được nạp, mọi yêu cầu mới sẽ được xếp hàng cho đến khi mô hình mới nạp được.  Khi các mô hình trước đó rảnh, một hoặc nhiều mô hình sẽ được gỡ ra để nhường chỗ cho mô hình mới.  Các yêu cầu trong hàng đợi sẽ được xử lý theo thứ tự.  Khi suy luận bằng GPU, các mô hình mới phải vừa hoàn toàn trong VRAM thì mới cho phép nạp mô hình đồng thời.

Xử lý song song các yêu cầu cho một mô hình làm tăng kích thước ngữ cảnh theo số yêu cầu song song.  Ví dụ, ngữ cảnh 2K với 4 yêu cầu song song sẽ cho ngữ cảnh 8K và cấp phát thêm bộ nhớ.

Các cài đặt máy chủ sau có thể dùng để điều chỉnh cách Ollama xử lý các yêu cầu đồng thời trên hầu hết các nền tảng:

- `OLLAMA_MAX_LOADED_MODELS` - Số mô hình tối đa có thể được nạp đồng thời, miễn là vừa trong bộ nhớ khả dụng.  Mặc định là 3 * số GPU hoặc 3 khi suy luận bằng CPU.
- `OLLAMA_NUM_PARALLEL` - Số yêu cầu song song tối đa mà mỗi mô hình xử lý cùng lúc.  Mặc định là 1, tức mỗi mô hình xử lý 1 yêu cầu tại một thời điểm.
- `OLLAMA_MAX_QUEUE` - Số yêu cầu tối đa mà Ollama xếp hàng khi bận trước khi từ chối các yêu cầu thêm. Mặc định là 512

Lưu ý: Windows với GPU Radeon hiện mặc định tối đa 1 mô hình do hạn chế của ROCm v5.7 về báo cáo VRAM khả dụng.  Khi ROCm v6.2 có sẵn, Windows Radeon sẽ theo các giá trị mặc định ở trên.  Bạn có thể bật nạp nhiều mô hình đồng thời trên Radeon trên Windows, nhưng hãy bảo đảm không nạp nhiều mô hình hơn mức vừa trong VRAM của GPU.

## Ollama nạp mô hình trên nhiều GPU như thế nào? {#how-does-ollama-load-models-on-multiple-gpus}

Khi nạp một mô hình mới, Ollama đánh giá lượng VRAM mô hình cần so với lượng hiện có.  Nếu mô hình vừa hoàn toàn trên một GPU bất kỳ, Ollama sẽ nạp mô hình lên GPU đó.  Cách này thường cho hiệu năng tốt nhất vì giảm lượng dữ liệu truyền qua bus PCI trong lúc suy luận.  Nếu mô hình không vừa hoàn toàn trên một GPU, nó sẽ được trải ra trên tất cả các GPU khả dụng.

## Làm sao để bật Flash Attention? {#how-can-i-enable-flash-attention}

Flash Attention là tính năng của hầu hết các mô hình hiện đại, có thể giảm đáng kể mức dùng bộ nhớ khi kích thước ngữ cảnh tăng.  Để bật Flash Attention, hãy đặt biến môi trường `OLLAMA_FLASH_ATTENTION` thành `1` khi khởi động máy chủ Ollama.

## Làm sao để đặt kiểu lượng tử hóa cho K/V cache? {#how-can-i-set-the-quantization-type-for-the-kv-cache}

K/V context cache có thể được lượng tử hóa để giảm đáng kể mức dùng bộ nhớ khi bật Flash Attention.

Để dùng K/V cache lượng tử hóa với Ollama, bạn có thể đặt biến môi trường sau:

- `OLLAMA_KV_CACHE_TYPE` - Kiểu lượng tử hóa cho K/V cache.  Mặc định là `f16`.

> Lưu ý: hiện đây là tùy chọn toàn cục - nghĩa là mọi mô hình sẽ chạy với kiểu lượng tử hóa đã chỉ định.

Các kiểu lượng tử hóa K/V cache hiện có là:

- `f16` - độ chính xác và mức dùng bộ nhớ cao (mặc định).
- `q8_0` - lượng tử hóa 8-bit, dùng khoảng 1/2 bộ nhớ của `f16` với mức mất độ chính xác rất nhỏ, thường không ảnh hưởng đáng kể đến chất lượng mô hình (khuyến nghị nếu không dùng f16).
- `q4_0` - lượng tử hóa 4-bit, dùng khoảng 1/4 bộ nhớ của `f16` với mức mất độ chính xác nhỏ đến vừa, có thể rõ hơn ở kích thước ngữ cảnh lớn.

Mức độ lượng tử hóa cache ảnh hưởng đến chất lượng phản hồi của mô hình phụ thuộc vào mô hình và tác vụ.  Các mô hình có số GQA cao (ví dụ Qwen2) có thể chịu ảnh hưởng về độ chính xác do lượng tử hóa lớn hơn so với các mô hình có số GQA thấp.

Bạn có thể cần thử nghiệm các kiểu lượng tử hóa khác nhau để tìm sự cân bằng tốt nhất giữa mức dùng bộ nhớ và chất lượng.

## Làm sao để ngăn Ollama khởi động khi tôi đăng nhập vào máy tính {#how-can-i-stop-ollama-from-starting-when-i-login-to-my-computer}

Ollama cho Windows và macOS tự đăng ký làm mục khởi động cùng đăng nhập trong quá trình cài đặt.  Bạn có thể tắt nếu không muốn Ollama tự khởi động.  Ollama sẽ giữ cài đặt này qua các lần nâng cấp, trừ khi bạn gỡ cài đặt ứng dụng.

**Windows**
- Xóa `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\Ollama.lnk`

**MacOS Monterey (v12)**
- Mở `Settings` -> `Users & Groups` -> `Login Items`, tìm mục `Ollama`, rồi nhấp `-` (dấu trừ) để xóa

**MacOS Ventura (v13) trở lên**
- Mở `Settings` và tìm "Login Items", tìm mục `Ollama` trong "Allow in the Background`, rồi nhấp thanh trượt để tắt.