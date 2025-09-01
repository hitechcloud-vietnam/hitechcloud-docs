# Hướng Dẫn Triển Khai Fooocus với Docker

Việc bắt đầu với tạo hình ảnh AI không cần phải đáng sợ—đặc biệt là với Fooocus, một công cụ mạnh mẽ và thân thiện với người dùng giúp người mới nhanh chóng trở thành chuyên gia. Sau khi thử nghiệm vô số công cụ qua nhiều năm, Fooocus vẫn là lựa chọn hàng đầu của tôi nhờ sự đơn giản và kết quả ấn tượng. Trong hướng dẫn này, tôi sẽ chỉ cho bạn cách khai thác sức mạnh của Fooocus bằng Docker, tối ưu hóa cài đặt để có kết quả nhanh như chớp, và tạo ra những hình nền tuyệt đẹp như hình thu nhỏ trong bài viết này. Hãy biến đổi quy trình sáng tạo của bạn!

## Yêu Cầu Cần Thiết để Chạy Fooocus trong Docker
Trước khi bắt đầu, hãy đảm bảo hệ thống của bạn đáp ứng các tiêu chí sau để có hiệu suất mượt mà:

- **Hệ điều hành Linux với Docker được cài đặt**  
  Chọn Ubuntu hoặc PopOS để có trải nghiệm desktop mượt mà.
- **GPU NVIDIA với VRAM lớn**  
  Fooocus hoạt động tốt nhất với khả năng tăng tốc GPU. Tôi sử dụng ASUS ROG STRIX RTX 2080TI (11GB VRAM) để xử lý các tác vụ nặng một cách dễ dàng—VRAM càng nhiều, đầu ra càng nhanh và chất lượng cao hơn.
- **RAM 32GB (Khuyến nghị)**  
  Mặc dù không bắt buộc, RAM bổ sung đảm bảo khả năng đa nhiệm mượt mà, đặc biệt khi quản lý các mô hình lớn.
- **Kiến thức cơ bản về Docker**  
  Mới làm quen với Docker? Hãy xem các hướng dẫn thân thiện với người mới để nhanh chóng bắt kịp.

## Tại Sao Docker Là Một Bước Đột Phá Cho Các Công Cụ AI
Việc cài đặt phần mềm AI trực tiếp thường đòi hỏi phải xử lý các vấn đề về phụ thuộc và cấu hình. Docker đơn giản hóa việc này bằng cách đóng gói mọi thứ vào một container di động. Chỉ với vài lệnh, bạn sẽ có Fooocus hoạt động mà không gặp rắc rối về tương thích!

## Bước 1: Triển Khai Fooocus Bằng Docker Compose
Sao chép tệp `docker-compose.yml` tối ưu này để bắt đầu thiết lập:

```yaml
services:
  app:
    image: ghcr.io/lllyasviel/fooocus
    ports:
     - "7865:7865"
    environment:
      - CMDARGS=--listen
      - DATADIR=/content/data
      - config_path=/content/data/config.txt
      - config_example_path=/content/data/config_modification_tutorial.txt
      - path_checkpoints=/checkpoints/
      - path_loras=/content/data/models/loras/
      - path_embeddings=/content/data/models/embeddings/
      - path_vae_approx=/content/data/models/vae_approx/
      - path_upscale_models=/content/data/models/upscale_models/
      - path_inpaint=/content/data/models/inpaint/
      - path_controlnet=/content/data/models/controlnet/
      - path_clip_vision=/content/data/models/clip_vision/
      - path_fooocus_expansion=/content/data/models/prompt_expansion/fooocus_expansion/
      - path_outputs=/content/app/outputs/
    volumes:
      - /docker/fooocus:/content/data
      - /docker/fooocus/checkpoints:/checkpoints
    tty: true
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [compute, utility]
```

**Ghi Chú Cấu Hình Quan Trọng**:
- Ánh xạ các thư mục quan trọng cho mô hình và đầu ra.
- Tận dụng khả năng của GPU NVIDIA để tăng tốc hiệu suất.
- Lưu trữ giao diện web Fooocus trên cổng 7865 để dễ dàng truy cập.

Chạy lệnh `docker-compose up -d`, và Fooocus sẽ khởi tạo trong vài phút!

## Bước 2: Tải Xuống và Tối Ưu Hóa Mô Hình AI Đầu Tiên
Khi khởi chạy lần đầu, Fooocus sẽ tự động tải mô hình JuggernautXL (6.4GB) vào `/checkpoints/juggernautXL_v8Rundiffusion.safetensors`. Mặc dù đây là một mô hình mặc định tốt, hãy tăng tốc quy trình làm việc của bạn với một lựa chọn mạnh mẽ hơn:

1. Truy cập CivitAI (một trung tâm mô hình miễn phí) và tải mô hình DreamShaper XL Turbo v2.1.
2. Đặt tệp `.safetensors` đã tải xuống vào thư mục `/checkpoints` được ánh xạ trong Docker.

Mô hình này giảm thời gian tạo hình ảnh mà không làm giảm chất lượng—lý tưởng cho việc thử nghiệm nhanh.

## Bước 3: Tối Ưu Hóa Cài Đặt Fooocus Để Tăng Tốc
Mở khóa toàn bộ tiềm năng của Fooocus với các điều chỉnh sau:

- **Kích Hoạt Chế Độ Nâng Cao**  
  Chọn hộp kiểm “Advanced” để truy cập các điều khiển chi tiết.
- **Chuyển Sang DreamShaperXL**  
  Trong tab Models, chọn mô hình turbo đã tải xuống.
- **Tối Ưu Hóa Cài Đặt Lấy Mẫu**  
  - **Chế Độ Gỡ Lỗi Nhà Phát Triển**: Kích hoạt trong tab Advanced.
  - **Sampler**: Chọn `dpmpp_sde` để cân bằng tốc độ/chất lượng.
  - **Số Bước Lấy Mẫu**: Giảm xuống 6—đúng vậy, chỉ sáu bước để tạo nhanh!

- **Tận Dụng Các Phong Cách Có Sẵn**  
  Fooocus cung cấp các phong cách như Fooocus V2 và Fooocus Sharp để nâng tầm nghệ thuật của bạn ngay lập tức. Di chuột qua từng phong cách để xem trước hiệu ứng.

## Bước 4: Tạo Hình Nền Đầu Tiên Trong 20 Giây
Hãy thực hiện tất cả:

1. **Đặt Kích Thước**: Chọn 1280×768 cho tỷ lệ màn hình rộng 5:3.
2. **Tạo Gợi Ý**:  
   *Những khối trừu tượng thanh lịch, dạng tế bào, hình nền ma thuật, màu tím đậm và xanh lam*
3. **Nhấn Generate**:  
   Kết quả: Hai hình nền chất lượng chuyên nghiệp trong 20,06 giây trên RTX 2080Ti!

## Bước 5: Hoàn Thiện Tác Phẩm Của Bạn
Bảo vệ và cá nhân hóa tác phẩm của bạn:

1. Mở hình ảnh yêu thích trong PhotoPea (trình chỉnh sửa dựa trên trình duyệt miễn phí).
2. Điều chỉnh độ trong suốt, thêm lớp phủ văn bản, hoặc tích hợp các yếu tố thương hiệu.

## Phân Tích Hiệu Suất: Điều Gì Đang Xảy Ra Bên Trong?
- **Sử Dụng VRAM**: ~5.5GB trong quá trình tạo, với 2.5GB được giữ lại sau xử lý.
- **Tổng Thời Gian**: 14,37 giây mỗi lô, bao gồm tải và lưu mô hình.
- **Sử Dụng GPU**: Gần 100%—phần cứng của bạn đang hoạt động hết công suất!

## Mẹo Cuối Cùng Để Thành Công Với Nghệ Thuật AI
- **Bắt Đầu Đơn Giản**: Làm chủ các gợi ý cơ bản trước khi thử nghiệm với gợi ý phủ định.
- **Tạo Hàng Loạt**: Tạo nhiều biến thể để khám phá các hướng sáng tạo.
- **Cập Nhật Liên Tục**: Theo dõi các nền tảng như Mind Renders để tìm các hướng dẫn nâng cao về Fooocus và ComfyUI.