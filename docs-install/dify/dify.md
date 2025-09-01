# Hướng dẫn cài đặt Dify với Docker Compose trên Ubuntu

**Dify** là một nền tảng mã nguồn mở mạnh mẽ để xây dựng và quản lý các ứng dụng **Large Language Model (LLM)**, từ **chatbots**, **agents** đến **workflows**. Sử dụng **Docker Compose**, Dify cung cấp một cách triển khai **self-hosted** linh hoạt, an toàn và có thể mở rộng. Hướng dẫn này sẽ dẫn bạn qua các bước cài đặt Dify trên **Ubuntu 22.04 LTS** hoặc **24.04 LTS**, với cấu hình tối ưu cho môi trường **production**.

## Tổng quan về Dify và các công nghệ cốt lõi
### Large Language Models (LLMs)
- **LLMs** là các mô hình AI được huấn luyện trên lượng lớn dữ liệu văn bản, cho phép hiểu và tạo ra ngôn ngữ tự nhiên.
- **Cách hoạt động**: Dự đoán từ tiếp theo trong chuỗi, hỗ trợ các tác vụ như viết văn bản, dịch ngôn ngữ, tóm tắt, và trả lời câu hỏi.
- **Dify và LLMs**: Dify không phải là LLM mà là một nền tảng **LLMOps** và **BaaS** (Backend-as-a-Service), giúp tích hợp LLMs với dữ liệu và ý tưởng của bạn.

### Docker và Containers
- **Docker**: Công cụ sử dụng **OS-level virtualization** để đóng gói ứng dụng thành các **containers**.
- **Docker Image**: Bản thiết kế tĩnh chứa mã, thư viện, và cấu hình.
- **Docker Container**: Phiên bản chạy của **image**, thực thi ứng dụng.
- **Lợi ích**:
  - **Tính nhất quán**: Ứng dụng chạy giống nhau trên mọi môi trường.
  - **Cách ly**: Các container độc lập, tránh xung đột.
  - **Hiệu quả**: Nhẹ và nhanh hơn máy ảo truyền thống.
- **Dify và Docker**: Dify được phân phối dưới dạng các **Docker images** cho từng thành phần.

### Docker Compose
- **Docker Compose**: Công cụ quản lý ứng dụng đa container, định nghĩa qua file `docker-compose.yml`.
- **Lợi ích**:
  - Quản lý phụ thuộc giữa các dịch vụ (API, database, web).
  - Khởi động/dừng ứng dụng bằng lệnh đơn giản.
- **Dify và Docker Compose**: Dify sử dụng Docker Compose để quản lý các dịch vụ như **API**, **worker**, **web**, **database**, và **vector store**, đảm bảo tính **modular** và **scalable**.

## Yêu cầu hệ thống
### Phần cứng
- **Hệ điều hành**: Ubuntu 20.04 LTS, 22.04 LTS, hoặc 24.04 LTS.
- **CPU**: Tối thiểu 2 cores (khuyến nghị 4 cores+).
- **RAM**: Tối thiểu 4GB (khuyến nghị 8GB+ cho phát triển, 16GB+ cho production).
- **Disk**: Tối thiểu 50GB SSD (cho OS, Docker images, database, và vector indexes).
- **Tên miền**: Cần thiết nếu muốn cấu hình **SSL** qua Let’s Encrypt.
- **Quyền truy cập**: Root hoặc sudo qua SSH.

### Phần mềm
- **Docker Engine**: Phiên bản 19.03+.
- **Docker Compose**: V2 (khuyến nghị) hoặc V1 (1.28+).
- **Git**: Để clone repository Dify.
- **Curl**: Hỗ trợ tải dữ liệu (khuyến nghị).
- **Text Editor**: Nano hoặc Vim để chỉnh sửa file cấu hình.

### Bảng kiểm tra yêu cầu
| Loại           | Yêu cầu                     | Lệnh kiểm tra / Ghi chú             |
|----------------|-----------------------------|-------------------------------------|
| OS             | Ubuntu 20.04/22.04/24.04 LTS | `lsb_release -a`                   |
| CPU            | >= 2 cores                  | `nproc`                            |
| RAM            | >= 4GB (8GB+ khuyến nghị)   | `free -h`                          |
| Disk           | >= 50GB free                | `df -h`                            |
| Docker Engine  | 19.03+                      | `docker --version`                 |
| Docker Compose | V2 (hoặc V1: 1.28+)         | `docker compose version`           |
| Git            | Installed                   | `git --version`                    |
| Curl           | Optional                    | `curl --version`                   |
| Text Editor    | Installed (e.g., nano)      | `nano --version`                   |
| User Privileges| sudo access                 | User phải chạy lệnh `sudo` được    |

## Cài đặt Dify với Docker Compose
### Bước 1: Clone repository Dify
1. **Clone repository với phiên bản ổn định** (ví dụ: v1.3.1):
   ```bash
   git clone https://github.com/langgenius/dify.git --branch v1.3.1
   ```
   Hoặc clone phiên bản mới nhất (dùng cẩn thận cho production):
   ```bash
   git clone https://github.com/langgenius/dify.git
   ```

2. **Chuyển vào thư mục Docker**:
   ```bash
   cd dify/docker
   ```

### Bước 2: Cấu hình file Environment (.env)
1. **Sao chép file mẫu**:
   ```bash
   cp .env.example .env
   nano .env
   ```

2. **Cấu hình các biến quan trọng**:
   ```env
   # Security
   SECRET_KEY=your_strong_random_key
   INIT_PASSWORD=your_secure_admin_password

   # Database (PostgreSQL)
   DB_USERNAME=postgres
   DB_PASSWORD=your_secure_db_password
   DB_HOST=db
   DB_DATABASE=dify

   # Redis
   REDIS_PASSWORD=your_secure_redis_password

   # URLs (Cập nhật với IP hoặc tên miền của bạn)
   CONSOLE_API_URL=http://your_server_ip
   CONSOLE_WEB_URL=http://your_server_ip
   APP_WEB_URL=http://your_server_ip
   SERVICE_API_URL=http://your_server_ip
   FILES_URL=http://your_server_ip/files

   # Vector Store
   VECTOR_STORE=weaviate
   WEAVIATE_ENDPOINT=http://weaviate:8080

   # Storage
   STORAGE_TYPE=local
   STORAGE_LOCAL_PATH=storage
   ```

3. **Tạo SECRET_KEY**:
   ```bash
   openssl rand -base64 42
   ```
   Sao chép và dán vào `SECRET_KEY` trong `.env`.

### Bước 3: Hiểu cấu trúc `docker-compose.yml`
Dify sử dụng kiến trúc **microservices**, với các dịch vụ chính:
| Dịch vụ          | Mô tả                           | Công nghệ                     |
|------------------|---------------------------------|-------------------------------|
| api              | Backend chính (RESTful APIs)    | Python/Flask                 |
| worker           | Xử lý tác vụ nền                | Celery                       |
| web              | Giao diện người dùng            | Next.js                      |
| db               | Cơ sở dữ liệu                   | PostgreSQL                   |
| redis            | Caching và message broker       | Redis                        |
| nginx            | Reverse proxy, xử lý SSL        | Nginx                        |
| weaviate         | Vector database cho RAG         | Weaviate                     |
| sandbox          | Môi trường chạy code an toàn    | Custom                       |
| plugin_daemon    | Quản lý plugins                 | Custom                       |
| ssrf_proxy       | Proxy cho yêu cầu outbound      | Squid                        |

- **Volumes**: Lưu dữ liệu lâu dài cho database, vector store, và files (nếu `STORAGE_TYPE=local`).
- **Networks**: Dify sử dụng mạng Docker để các dịch vụ giao tiếp an toàn.

### Bước 4: Khởi động Dify
```bash
docker compose up -d
```

### Bước 5: Kiểm tra cài đặt
1. **Kiểm tra trạng thái container**:
   ```bash
   docker compose ps
   ```
   Đảm bảo tất cả container có trạng thái `running` hoặc `Up`.

2. **Kiểm tra logs**:
   ```bash
   docker compose logs -f web
   docker compose logs -f api
   docker compose logs -f worker
   ```

### Bước 6: Cấu hình Nginx Reverse Proxy với SSL
1. **Cài đặt Nginx và Certbot**:
   ```bash
   sudo apt install -y nginx certbot python3-certbot-nginx
   ```

2. **Lấy chứng chỉ SSL**:
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

3. **Tạo file cấu hình Nginx**:
   ```bash
   sudo nano /etc/nginx/sites-available/dify
   ```

4. **Cấu hình Nginx**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name yourdomain.com;

       ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
       include /etc/letsencrypt/options-ssl-nginx.conf;
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

       add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-Content-Type-Options "nosniff" always;

       location / {
           proxy_pass http://127.0.0.1:80;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection "upgrade";
           proxy_connect_timeout 60s;
           proxy_read_timeout 60s;
       }
   }
   ```

5. **Kích hoạt và khởi động Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/dify /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Bước 7: Truy cập và khởi tạo Dify
1. **Truy cập giao diện web**:
   - Local: `http://localhost/install`
   - Remote: `http://your_server_ip/install` hoặc `https://yourdomain.com/install`
   - Đảm bảo firewall (như `ufw`) cho phép port 80/443.

2. **Thiết lập tài khoản admin**:
   - Nhập email và mật khẩu (hoặc sử dụng `INIT_PASSWORD` từ `.env`).
   - Hoàn thành quy trình thiết lập.

3. **Tổng quan dashboard**:
   - **Studio**: Tạo ứng dụng AI (chatbots, agents, workflows).
   - **Knowledge**: Quản lý tài liệu cho **RAG**.
   - **Tools**: Thêm công cụ tùy chỉnh cho agents.
   - **Model Providers**: Kết nối với LLMs (OpenAI, Anthropic, hoặc tự host).
   - **Settings**: Quản lý người dùng, API keys, và cấu hình.

## Quản lý Dify
### Lệnh Docker Compose cơ bản
| Lệnh                                   | Mô tả                                      |
|----------------------------------------|--------------------------------------------|
| `docker compose up -d`                 | Khởi động tất cả dịch vụ Dify             |
| `docker compose down`                  | Dừng và xóa container, giữ volumes        |
| `docker compose down --volumes`        | Dừng và xóa cả volumes (xóa dữ liệu!)     |
| `docker compose ps`                    | Liệt kê trạng thái container              |
| `docker compose logs <service_name>`   | Xem logs của dịch vụ cụ thể               |
| `docker compose pull`                  | Tải images mới nhất                       |
| `docker compose exec <service_name> <command>` | Chạy lệnh trong container          |

### Cập nhật Dify
1. **Sao lưu dữ liệu** (xem phần tiếp theo).
2. **Cập nhật code**:
   ```bash
   cd ../
   git fetch --all --tags
   git checkout tags/v1.3.2 -b temp_v1.3.2
   cd docker
   ```

3. **Dừng và tải images mới**:
   ```bash
   docker compose down
   docker compose pull
   ```

4. **Đồng bộ `.env`**:
   - So sánh `.env` với `.env.example` mới.
   - Thêm/cập nhật các biến mới.

5. **Khởi động lại Dify**:
   ```bash
   docker compose up -d
   ```

6. **Chạy database migrations (nếu cần)**:
   ```bash
   docker compose exec api flask db upgrade
   ```

### Sao lưu dữ liệu
1. **Dừng dịch vụ**:
   ```bash
   docker compose down
   ```

2. **Sao lưu thư mục `volumes`**:
   ```bash
   tar -czvf dify_backup_$(date +%Y%m%d_%H%M%S).tar.gz ./volumes/
   ```

3. **Lưu trữ backup an toàn**:
   - Di chuyển file backup đến vị trí khác (cloud, server khác).

4. **Khôi phục từ backup**:
   ```bash
   docker compose down
   mv ./volumes ./volumes_old
   tar -xzvf dify_backup_YYYYMMDD_HHMMSS.tar.gz
   docker compose up -d
   ```

## Xử lý lỗi
### Vấn đề chung với Docker
- **Container không khởi động**:
  - Kiểm tra logs: `docker compose logs <service_name>`
  - Kiểm tra tài nguyên: `top` hoặc `htop`
- **Lỗi tải images**:
  - Đảm bảo kết nối internet.
  - Kiểm tra tên images trong `docker-compose.yml`.
- **Xung đột port**:
  - Kiểm tra port: `sudo ss -tulnp | grep ':80'`
  - Thay đổi `EXPOSE_NGINX_PORT` trong `.env`.

### Vấn đề cụ thể với Dify
- **Không đăng nhập được**:
  - Reset password: `docker compose exec <api_container_name> flask reset-password`
- **Lỗi mã hóa API key**:
  - Reset key pair: `docker compose exec <api_container_name> flask reset-encrypt-key-pair`
- **Lỗi URL/Domain**:
  - Kiểm tra `CONSOLE_API_URL`, `CONSOLE_WEB_URL`, `APP_WEB_URL`, `FILES_URL` trong `.env`.
- **Lỗi cài đặt plugin**:
  - **PluginDaemonBadRequestError**: Cập nhật trường `author` trong `manifest.yaml`.
  - **Bad signature**: Thêm `FORCE_VERIFYING_SIGNATURE=false` vào `.env` (chỉ dùng cho plugin đáng tin cậy).
- **Lỗi database migration**:
  - Chạy migration thủ công: `docker compose exec api flask db upgrade`
- **Lỗi upload file**:
  - Kiểm tra `STORAGE_TYPE` và quyền thư mục `volumes/app/storage`.

## Kết luận
**Dify** là một nền tảng mạnh mẽ để xây dựng ứng dụng AI **self-hosted**, từ **chatbots** đến **agents** phức tạp. Với **Docker Compose**, bạn có thể triển khai Dify một cách an toàn và dễ dàng mở rộng. Hướng dẫn này cung cấp các bước chi tiết để cài đặt, cấu hình, và quản lý Dify, cùng với các mẹo xử lý lỗi phổ biến.

### Các bước tiếp theo
- **Tạo ứng dụng AI đầu tiên**: Thử xây dựng một chatbot trong **Studio**.
- **Kết nối LLMs**: Tích hợp với OpenAI, Anthropic, hoặc các mô hình tự host.
- **Xây dựng Knowledge Base**: Tải tài liệu để sử dụng **RAG**.
- **Khám phá Agents**: Tạo các trợ lý AI với khả năng sử dụng **tools**.

Tham gia cộng đồng Dify trên **GitHub** hoặc **Discord** để được hỗ trợ và chia sẻ ý tưởng. Chúc bạn thành công trong hành trình xây dựng ứng dụng AI với Dify!