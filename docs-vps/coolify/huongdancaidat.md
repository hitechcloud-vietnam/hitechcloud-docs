# Coolify - Hướng dẫn cài đặt

Coolify là một công cụ mã nguồn mở giúp đơn giản hóa việc tự triển khai và quản lý ứng dụng (self-host) trên VPS hoặc máy ảo, thay thế các dịch vụ như Heroku hay Netlify. Với giao diện web thân thiện, Coolify cho phép triển khai, quản lý và giám sát ứng dụng, database chỉ qua vài cú nhấp chuột, hỗ trợ tự động hóa và tích hợp SSL miễn phí.

## Tại sao chọn Coolify?
- **Cài đặt dễ dàng**: Giao diện web trực quan thay thế các lệnh terminal phức tạp.
- **Hỗ trợ linh hoạt**: Tương thích với mã nguồn Git, Dockerfile, Docker Image, và Docker Compose.
- **Quản lý tập trung**: Theo dõi trạng thái, logs và tài nguyên trên một dashboard duy nhất.
- **SSL miễn phí**: Tự động tích hợp Let’s Encrypt qua Cloudflare cho HTTPS.
- **Tiết kiệm thời gian**: Tự động hóa các tác vụ lặp lại như pull code, build, và deploy.
- **Tối ưu tài nguyên**: Giám sát và điều chỉnh CPU, RAM, và ổ cứng để đạt hiệu suất tối đa.

## Chuẩn bị
- **VPS hoặc máy ảo**:
  - Tối thiểu: 2 CPU, 2GB RAM, 30GB lưu trữ.
  - Đề nghị: 4 CPU, 8GB RAM, 150GB lưu trữ để chạy nhiều dịch vụ mượt mà.
- **Hệ điều hành**: Ubuntu 22.04 LTS (ổn định nhất).
- **Tên miền**: Không bắt buộc, nhưng khuyến khích để cấu hình chuyên nghiệp và hỗ trợ SSL.
- **Công cụ SSH**: PuTTY, Termius, hoặc terminal để kết nối VPS.
- **Kết nối internet**: Ổn định để tải và triển khai ứng dụng.
- **Cập nhật hệ thống**: Chạy lệnh để đảm bảo hệ thống mới nhất:
  ```bash
  sudo apt update && sudo apt upgrade -y
  ```

## Hướng dẫn cài đặt Coolify
1. **Kết nối VPS**:
   - Đăng nhập qua SSH:
     ```bash
     ssh user@server-ip
     ```

2. **Cài đặt Coolify**:
   - Chạy lệnh sau để tải và cài đặt Coolify (tự động cài Docker):
     ```bash
     curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
     ```
   - Quá trình mất khoảng 5-7 phút, tùy thuộc vào cấu hình VPS.

3. **Cấu hình tên miền** (nếu sử dụng):
   - Chuyển Name Servers sang Cloudflare (khuyến nghị để tích hợp SSL).
   - Thêm bản ghi A trên Cloudflare, trỏ tên miền (hoặc subdomain) đến IP VPS.
   - Thêm bản ghi A wildcard (`*`) để hỗ trợ tạo subdomain dễ dàng.

4. **Truy cập Coolify**:
   - Mở trình duyệt, nhập: `http://<server-ip>:8000`.
   - Tạo tài khoản admin theo hướng dẫn.
   - Cập nhật tên miền trong **Settings -> Server -> Local Host** (ví dụ: `coolify.yourdomain.com`).
   - Khởi động lại Coolify để áp dụng cấu hình.

## Triển khai ứng dụng đầu tiên
1. **Tạo Project**:
   - Đặt tên project để nhóm các ứng dụng hoặc dịch vụ liên quan.

2. **Thêm Resource**:
   - Chọn loại: **Application**, **Database**, **Service**, hoặc **Static Site**.
   - **Ví dụ: Triển khai ứng dụng Node.js**:
     - Chọn **Deploy from Git Repository**.
     - Nhập URL Git (GitHub, GitLab, v.v.).
     - Cấu hình biến môi trường và domain (ví dụ: `myapp.yourdomain.com`).
     - Nhấn **Deploy** để Coolify tự động pull code, build và chạy.
   - **Với Docker Compose**:
     - Nhập URL Git chứa file `docker-compose.yml`.
     - Điền biến môi trường cần thiết.
     - Thiết lập domain cho các service.
     - Nhấn **Deploy** để chạy toàn bộ stack.

3. **Quản lý**:
   - Xem logs, restart, hoặc dừng ứng dụng trực tiếp trên dashboard.

## Mẹo sử dụng
- **Quản lý ứng dụng**: Theo dõi logs, trạng thái và tài nguyên qua dashboard.
- **Tích hợp SSL**: Kích hoạt Let’s Encrypt trong Coolify để đảm bảo HTTPS.
- **Sao lưu**: Cấu hình sao lưu tự động cho ứng dụng và database.
- **Giám sát tài nguyên**: Theo dõi CPU, RAM, và dung lượng ổ cứng để tối ưu hiệu suất.
- **Bảo mật**: Bật xác thực hai yếu tố (2FA) và cập nhật Coolify thường xuyên.
- **Gỡ lỗi**: Kiểm tra logs trong dashboard hoặc terminal nếu gặp sự cố.

## Xử lý lỗi thường gặp
- **Thiếu gói phụ thuộc**: Cài đặt `curl` hoặc `wget`:
  ```bash
  sudo apt install -y curl wget
  ```
- **Xung đột cổng**: Kiểm tra cổng bằng:
  ```bash
  netstat -tuln
  ```
  Mở cổng 8000 nếu cần:
  ```bash
  sudo ufw allow 8000
  ```
- **Không truy cập được giao diện**: Đảm bảo cổng 8000 mở và dịch vụ Coolify đang chạy:
  ```bash
  docker ps
  ```
- **Mạng kém**: Kiểm tra kết nối internet hoặc thử lại lệnh cài đặt.
- **Lỗi tên miền**: Xác minh bản ghi A trên Cloudflare trỏ đúng IP VPS.
- **Sao lưu trước khi cài**: Tạo snapshot VPS để khôi phục nếu gặp lỗi nghiêm trọng.

## Kết luận
Coolify là một công cụ mạnh mẽ, giúp đơn giản hóa việc self-host ứng dụng, database, và website. Với giao diện trực quan, hỗ trợ đa dạng ứng dụng, và tự động hóa thông minh, Coolify giúp bạn làm chủ hạ tầng số mà không cần lo lắng về cấu hình phức tạp. Hãy thử Coolify để triển khai và quản lý ứng dụng dễ dàng hơn bao giờ hết!

Chúc bạn cài đặt và sử dụng thành công!