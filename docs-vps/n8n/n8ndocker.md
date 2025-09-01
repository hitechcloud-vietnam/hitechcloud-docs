# Cài đặt n8n bằng Docker

Hướng dẫn này cung cấp cách cài đặt n8n, một công cụ tự động hóa workflow mã nguồn mở, trên VPS sử dụng Docker và Traefik để quản lý tên miền và SSL. Quá trình cài đặt mất khoảng 5-10 phút trên hệ thống sạch.

## Yêu cầu
- **Hệ điều hành**: Debian 12, Ubuntu 22.04 hoặc 24.04.
- **RAM**: Tối thiểu 1GB (khuyến nghị 2GB trở lên).
- **CPU**: Tối thiểu 1 core (khuyến nghị 2 core trở lên).
- **Disk**: Tối thiểu 10GB, nhưng càng nhiều càng tốt.
- **Quyền truy cập**: Root hoặc sudo qua SSH.
- **Tên miền**: Cần trỏ tên miền/subdomain về IP của VPS trước khi cài đặt để hỗ trợ SSL.
- **Kết nối internet**: Ổn định để tải Docker và hình ảnh container.

## Cài đặt

### 1. Cài đặt Docker và Docker Compose
1. **Đăng nhập VPS qua SSH**:
   ```bash
   ssh root@server-ip
   ```

2. **Xóa các phiên bản Docker cũ (nếu có)**:
   ```bash
   sudo apt-get remove -y docker docker-engine docker.io containerd runc
   ```

3. **Cập nhật hệ thống và cài đặt phụ thuộc**:
   ```bash
   sudo apt-get update
   sudo apt-get install -y ca-certificates curl gnupg lsb-release
   ```

4. **Thêm kho lưu trữ Docker**:
   ```bash
   sudo mkdir -p /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. **Cài đặt Docker và Docker Compose**:
   ```bash
   sudo apt-get update
   sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
   ```

6. **Kiểm tra cài đặt**:
   ```bash
   docker --version
   docker compose version
   ```

### 2. Tạo file cấu hình Docker Compose
1. **Tạo thư mục cho n8n**:
   ```bash
   mkdir /home/n8n
   cd /home/n8n
   ```

2. **Tạo file `docker-compose.yml`**:
   ```bash
   nano docker-compose.yml
   ```

3. **Dán nội dung sau vào file**:
   ```yaml
   services:
     traefik:
       image: traefik
       restart: always
       command:
         - "--api=true"
         - "--api.insecure=true"
         - "--providers.docker=true"
         - "--providers.docker.exposedbydefault=false"
         - "--entrypoints.web.address=:80"
         - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
         - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
         - "--entrypoints.websecure.address=:443"
         - "--certificatesresolvers.mytlschallenge.acme.tlschallenge=true"
         - "--certificatesresolvers.mytlschallenge.acme.email=${SSL_EMAIL}"
         - "--certificatesresolvers.mytlschallenge.acme.storage=/letsencrypt/acme.json"
       ports:
         - "80:80"
         - "443:443"
       volumes:
         - traefik_data:/letsencrypt
         - /var/run/docker.sock:/var/run/docker.sock:ro
     n8n:
       image: docker.n8n.io/n8nio/n8n
       restart: always
       labels:
         - "traefik.enable=true"
         - "traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)"
         - "traefik.http.routers.n8n.entrypoints=websecure"
         - "traefik.http.routers.n8n.tls=true"
         - "traefik.http.routers.n8n.tls.certresolver=mytlschallenge"
         - "traefik.http.services.n8n.loadbalancer.server.port=5678"
         - "traefik.http.middlewares.n8n-headers.headers.SSLRedirect=true"
         - "traefik.http.middlewares.n8n-headers.headers.STSSeconds=31536000"
         - "traefik.http.middlewares.n8n-headers.headers.browserXSSFilter=true"
         - "traefik.http.middlewares.n8n-headers.headers.contentTypeNosniff=true"
         - "traefik.http.middlewares.n8n-headers.headers.forceSTSHeader=true"
         - "traefik.http.middlewares.n8n-headers.headers.SSLHost=${DOMAIN_NAME}"
         - "traefik.http.middlewares.n8n-headers.headers.STSIncludeSubdomains=true"
         - "traefik.http.middlewares.n8n-headers.headers.STSPreload=true"
         - "traefik.http.routers.n8n.middlewares=n8n-headers@docker"
       environment:
         - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
         - N8N_PORT=5678
         - N8N_PROTOCOL=https
         - NODE_ENV=production
         - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}
         - GENERIC_TIMEZONE=${GENERIC_TIMEZONE}
       volumes:
         - n8n_data:/home/node/.n8n
   volumes:
     traefik_data:
       external: true
     n8n_data:
       external: true
   ```

4. **Lưu và thoát**:
   - Nhấn `Ctrl + O` để lưu, `Ctrl + X` để thoát.

### 3. Tạo file cấu hình tên miền
1. **Tạo file `.env`**:
   ```bash
   nano .env
   ```

2. **Dán nội dung sau** (thay các giá trị tương ứng):
   ```env
   SSL_EMAIL=your-email@gmail.com
   SUBDOMAIN=n8n
   DOMAIN_NAME=yourdomain.com
   GENERIC_TIMEZONE=Asia/Ho_Chi_Minh
   ```

3. **Lưu và thoát**:
   - Nhấn `Ctrl + O` để lưu, `Ctrl + X` để thoát.

4. **Tạo volume cho Docker**:
   ```bash
   docker volume create traefik_data
   docker volume create n8n_data
   ```

### 4. Khởi chạy n8n
1. **Trỏ tên miền**:
   - Trước khi chạy, đảm bảo tên miền (`n8n.yourdomain.com`) đã được trỏ về IP của VPS thông qua bản ghi A trên DNS provider (ví dụ: Cloudflare).

2. **Khởi động n8n và Traefik**:
   ```bash
   sudo docker compose up -d
   ```

3. **Kiểm tra trạng thái**:
   ```bash
   docker ps
   ```
   - Đảm bảo các container `traefik` và `n8n` đang chạy.

4. **Truy cập n8n**:
   - Mở trình duyệt, truy cập: `https://n8n.yourdomain.com`.
   - Thiết lập tài khoản admin theo hướng dẫn trên giao diện web.

### 5. Cập nhật n8n
Để cập nhật n8n lên phiên bản mới nhất:
```bash
cd /home/n8n
sudo docker compose pull
sudo docker compose down
sudo docker compose up -d
```

## Lưu ý
- **Tên miền**: Phải trỏ tên miền/subdomain về IP VPS trước khi chạy `docker compose up -d` để Traefik tự động cấu hình SSL qua Let’s Encrypt.
- **Mở cổng**: Đảm bảo cổng 80 và 443 được mở trong tường lửa:
  ```bash
  sudo ufw allow 80
  sudo ufw allow 443
  ```
- **Bảo mật**: Đổi mật khẩu admin ngay sau khi cài đặt và bật 2FA (nếu có).
- **Sao lưu**: Tạo snapshot VPS trước khi cài đặt để khôi phục nếu gặp lỗi.
- **Xử lý lỗi**:
  - **Không truy cập được giao diện**: Kiểm tra cổng 443:
    ```bash
    netstat -tuln | grep 443
    ```
  - **Lỗi SSL**: Xác minh tên miền đã trỏ đúng IP và kiểm tra email trong file `.env`.
  - **Container không chạy**: Xem logs:
    ```bash
    docker logs <container-name>
    ```

## Kết luận
n8n là một công cụ tự động hóa mạnh mẽ, và với Docker cùng Traefik, bạn có thể triển khai nhanh chóng với SSL tự động. Hướng dẫn trên giúp bạn cài đặt n8n trên VPS chỉ trong 5-10 phút. Hãy làm theo các bước và bắt đầu xây dựng workflow tự động hóa của riêng bạn!

Chúc bạn cài đặt thành công!