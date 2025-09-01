# Hướng dẫn cài đặt NocoDB với Docker Compose trên Ubuntu

**NocoDB** là một nền tảng mã nguồn mở mạnh mẽ, biến bất kỳ cơ sở dữ liệu nào thành giao diện bảng tính thông minh, giúp quản lý dữ liệu dễ dàng cho cả người dùng kỹ thuật và không kỹ thuật. Tương tự như **Airtable** nhưng với lợi thế mã nguồn mở, NocoDB hỗ trợ **PostgreSQL**, **MySQL**, **SQLite**, và nhiều loại cơ sở dữ liệu khác, lý tưởng cho việc **prototyping nhanh**, **quản lý dự án**, hoặc **CRM**. Hướng dẫn này sẽ hướng dẫn bạn cài đặt NocoDB sử dụng **Docker Compose** trên **Ubuntu 22.04 LTS** hoặc **24.04 LTS**, với các bước chi tiết để đảm bảo triển khai mượt mà cho cả môi trường thử nghiệm và **production**.

## Tổng quan về NocoDB và Docker Compose
- **NocoDB**: Cung cấp giao diện web trực quan để quản lý cơ sở dữ liệu, hỗ trợ tạo ứng dụng tùy chỉnh mà không cần viết mã. Tính năng nổi bật bao gồm:
  - **Tích hợp cơ sở dữ liệu**: Kết nối trực tiếp với cơ sở dữ liệu hiện có.
  - **Giao diện low-code**: Tạo bảng, view, và form bằng thao tác kéo thả.
  - **API tự động**: Tạo REST APIs cho dữ liệu.
  - **Hỗ trợ cộng tác**: Cho phép nhiều người dùng làm việc cùng lúc.
- **Docker Compose**: Công cụ định nghĩa và chạy ứng dụng đa container qua file YAML, giúp triển khai NocoDB cùng cơ sở dữ liệu (như **PostgreSQL** hoặc **SQLite**) dễ dàng, đảm bảo tính nhất quán và khả năng mở rộng.
- **Tại sao chọn Ubuntu?** Ubuntu là một nền tảng ổn định, được hỗ trợ rộng rãi, phù hợp cho các triển khai container hóa.

## Yêu cầu hệ thống
### Phần cứng
- **Hệ điều hành**: Ubuntu 20.04 LTS, 22.04 LTS, hoặc 24.04 LTS.
- **CPU**: Tối thiểu 1 core (khuyến nghị 2 cores+ cho production).
- **RAM**: Tối thiểu 2GB (khuyến nghị 4GB+ cho production).
- **Disk**: Tối thiểu 20GB SSD (khuyến nghị 50GB+ cho dữ liệu và logs).
- **Tên miền**: Cần thiết nếu cấu hình **SSL** qua Let’s Encrypt.
- **Quyền truy cập**: Root hoặc sudo qua SSH.

### Phần mềm
- **Docker Engine**: Phiên bản 19.03+.
- **Docker Compose**: V2 (khuyến nghị) hoặc V1 (1.28+).
- **Git**: Để clone repository (tùy chọn, nhưng hữu ích).
- **Text Editor**: Nano hoặc Vim để chỉnh sửa file cấu hình.

### Bảng kiểm tra yêu cầu
| Loại           | Yêu cầu                     | Lệnh kiểm tra / Ghi chú             |
|----------------|-----------------------------|-------------------------------------|
| OS             | Ubuntu 20.04/22.04/24.04 LTS | `lsb_release -a`                   |
| CPU            | >= 1 core (2+ khuyến nghị)  | `nproc`                            |
| RAM            | >= 2GB (4GB+ khuyến nghị)   | `free -h`                          |
| Disk           | >= 20GB free                | `df -h`                            |
| Docker Engine  | 19.03+                      | `docker --version`                 |
| Docker Compose | V2 (hoặc V1: 1.28+)         | `docker compose version`           |
| Git            | Optional                    | `git --version`                    |
| Text Editor    | Installed (e.g., nano)      | `nano --version`                   |
| User Privileges| sudo access                 | User phải chạy lệnh `sudo` được    |

## Chuẩn bị môi trường Ubuntu
### Bước 1: Cài đặt Docker Engine
1. **Cập nhật package index**:
   ```bash
   sudo apt update
   ```

2. **Cài đặt dependencies**:
   ```bash
   sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
   ```

3. **Thêm GPG key của Docker**:
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

4. **Thêm repository Docker**:
   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

5. **Cài đặt Docker**:
   ```bash
   sudo apt update
   sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin
   ```

6. **Kích hoạt và khởi động Docker**:
   ```bash
   sudo systemctl enable docker
   sudo systemctl start docker
   ```

7. **Thêm user vào nhóm Docker**:
   ```bash
   sudo usermod -aG docker ${USER}
   ```
   Đăng xuất và đăng nhập lại để áp dụng.

8. **Kiểm tra phiên bản Docker**:
   ```bash
   docker --version
   ```

### Bước 2: Cài đặt Docker Compose
1. **Cài đặt plugin Docker Compose**:
   ```bash
   sudo apt install -y docker-compose-plugin
   ```

2. **Kiểm tra phiên bản**:
   ```bash
   docker compose version
   ```

### Bước 3: Cài đặt Git (tùy chọn, nếu muốn clone repository)
```bash
sudo apt install -y git
git --version
```

## Triển khai NocoDB với Docker Compose
### Cấu hình đơn giản với SQLite
**SQLite** là cơ sở dữ liệu mặc định của NocoDB, phù hợp cho thử nghiệm hoặc dự án nhỏ.

1. **Tạo thư mục dự án**:
   ```bash
   mkdir nocodb && cd nocodb
   ```

2. **Tạo file `docker-compose.yml`**:
   ```bash
   nano docker-compose.yml
   ```

3. **Thêm nội dung sau**:
   ```yaml
   version: '3.8'
   services:
     nocodb:
       image: nocodb/nocodb:latest
       container_name: nocodb
       ports:
         - "8080:8080"
       volumes:
         - nocodb_data:/usr/app/data
       environment:
         - NC_AUTH_JWT_SECRET=your_jwt_secret_here
       restart: unless-stopped
   volumes:
     nocodb_data:
   ```

4. **Tạo JWT secret**:
   ```bash
   openssl rand -hex 32
   ```
   Sao chép output và thay thế `your_jwt_secret_here` trong file `docker-compose.yml`.

### Cấu hình với PostgreSQL cho Production
**PostgreSQL** là lựa chọn tốt hơn cho môi trường **production** hoặc dữ liệu lớn.

1. **Cập nhật `docker-compose.yml`**:
   ```yaml
   version: '3.8'
   services:
     nocodb:
       image: nocodb/nocodb:latest
       container_name: nocodb
       ports:
         - "8080:8080"
       environment:
         - NC_DB=pg://db:5432?u=nocodb&p=your_secure_password&d=nocodb
         - NC_AUTH_JWT_SECRET=your_jwt_secret_here
       depends_on:
         - db
       restart: unless-stopped
     db:
       image: postgres:15
       container_name: nocodb_postgres
       environment:
         - POSTGRES_USER=nocodb
         - POSTGRES_PASSWORD=your_secure_password
         - POSTGRES_DB=nocodb
       volumes:
         - pg_data:/var/lib/postgresql/data
       restart: unless-stopped
   volumes:
     nocodb_data:
     pg_data:
   ```
   - Thay `your_secure_password` bằng mật khẩu mạnh.
   - Thay `your_jwt_secret_here` bằng JWT secret từ bước trên.

2. **Giải thích cấu hình**:
   - **nocodb**: Dịch vụ chính, sử dụng image `nocodb/nocodb:latest`.
   - **db**: Dịch vụ PostgreSQL, lưu trữ dữ liệu NocoDB.
   - **NC_DB**: Chuỗi kết nối PostgreSQL (format: `pg://host:port?u=user&p=password&d=database`).
   - **volumes**: Lưu trữ dữ liệu lâu dài cho NocoDB và PostgreSQL.
   - **ports**: Ánh xạ cổng 8080 của host với container.
   - **restart**: Đảm bảo container tự khởi động lại trừ khi bị dừng thủ công.

### Bước 4: Khởi động NocoDB
1. **Chạy Docker Compose**:
   ```bash
   docker compose up -d
   ```

2. **Kiểm tra trạng thái container**:
   ```bash
   docker compose ps
   ```
   Đảm bảo container `nocodb` (và `nocodb_postgres` nếu dùng PostgreSQL) ở trạng thái `Up`.

3. **Xem logs nếu cần**:
   ```bash
   docker compose logs -f
   ```

### Bước 5: Truy cập NocoDB
1. **Mở trình duyệt**:
   - Local: `http://localhost:8080`
   - Remote: `http://<your_server_ip>:8080`

2. **Tạo tài khoản admin**:
   - Nhập email và mật khẩu mạnh.
   - Nhấn **Sign up** để vào dashboard.

3. **Khám phá dashboard**:
   - Tạo **project** mới.
   - Kết nối với cơ sở dữ liệu hiện có hoặc tạo bảng mới.
   - Sử dụng các tính năng như **forms**, **views**, hoặc **APIs**.

### Bước 6: Cấu hình Nginx Reverse Proxy với SSL
Để truy cập an toàn qua internet, sử dụng **Nginx** và **Let’s Encrypt** cho SSL.

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
   sudo nano /etc/nginx/sites-available/nocodb
   ```

4. **Thêm cấu hình Nginx**:
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
           proxy_pass http://127.0.0.1:8080;
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
   sudo ln -s /etc/nginx/sites-available/nocodb /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

6. **Truy cập qua HTTPS**:
   - Mở trình duyệt tại: `https://yourdomain.com`
   - Đăng nhập bằng tài khoản admin đã tạo.

## Quản lý NocoDB
### Lệnh Docker Compose cơ bản
| Lệnh                                   | Mô tả                                      |
|----------------------------------------|--------------------------------------------|
| `docker compose up -d`                 | Khởi động tất cả dịch vụ NocoDB           |
| `docker compose down`                  | Dừng và xóa container, giữ volumes        |
| `docker compose down --volumes`        | Dừng và xóa cả volumes (xóa dữ liệu!)     |
| `docker compose ps`                    | Liệt kê trạng thái container              |
| `docker compose logs -f`               | Xem logs theo thời gian thực              |
| `docker compose pull`                  | Tải images mới nhất                       |

### Cập nhật NocoDB
1. **Sao lưu dữ liệu** (xem phần tiếp theo).
2. **Tải images mới**:
   ```bash
   docker compose pull
   ```

3. **Khởi động lại dịch vụ**:
   ```bash
   docker compose up -d
   ```

### Sao lưu và khôi phục dữ liệu
1. **Dừng dịch vụ**:
   ```bash
   docker compose down
   ```

2. **Sao lưu volumes**:
   ```bash
   tar -czvf nocodb_backup_$(date +%Y%m%d_%H%M%S).tar.gz /var/lib/docker/volumes/nocodb_*
   ```

3. **Lưu trữ backup an toàn**:
   - Di chuyển file backup đến cloud hoặc server khác.

4. **Khôi phục từ backup**:
   ```bash
   docker compose down
   sudo rm -rf /var/lib/docker/volumes/nocodb_*
   tar -xzvf nocodb_backup_YYYYMMDD_HHMMSS.tar.gz -C /var/lib/docker/volumes/
   docker compose up -d
   ```

## Xử lý lỗi
- **Cổng 8080 bị chiếm dụng**:
  - Kiểm tra: `sudo netstat -tuln | grep 8080`
  - Thay đổi cổng trong `docker-compose.yml` (ví dụ: `8081:8080`).
- **Container không khởi động**:
  - Xem logs: `docker compose logs`
  - Kiểm tra cú pháp `NC_DB` hoặc quyền volumes.
- **Lỗi kết nối PostgreSQL**:
  - Đảm bảo `POSTGRES_USER`, `POSTGRES_PASSWORD`, và `POSTGRES_DB` khớp với `NC_DB`.
  - Kiểm tra logs: `docker compose logs db`
- **Dữ liệu bị mất**:
  - Đảm bảo volumes được định nghĩa trong `docker-compose.yml`.
- **Lỗi quyền**:
  - Kiểm tra user trong nhóm Docker: `groups`
  - Sử dụng `sudo` nếu cần.

## Kết luận
**NocoDB** là một công cụ **low-code** mạnh mẽ, biến cơ sở dữ liệu thành giao diện bảng tính dễ sử dụng, phù hợp cho **prototyping**, **quản lý dự án**, hoặc **CRM**. Sử dụng **Docker Compose** trên **Ubuntu**, bạn có thể triển khai NocoDB nhanh chóng và đáng tin cậy. Hướng dẫn này đã bao gồm:
- Cài đặt **Docker** và **Docker Compose**.
- Cấu hình NocoDB với **SQLite** (cho thử nghiệm) hoặc **PostgreSQL** (cho production).
- Bảo mật với **Nginx** và **SSL**.
- Quản lý, cập nhật, và sao lưu.

Hãy bắt đầu với **SQLite** để thử nghiệm và chuyển sang **PostgreSQL** cho nhu cầu **production**. Khám phá thêm tại [tài liệu chính thức của NocoDB](https://docs.nocodb.com/) hoặc tham gia cộng đồng để được hỗ trợ. Chúc bạn quản lý dữ liệu hiệu quả với NocoDB![](https://nocodb.com/docs/self-hosting/installation/docker-compose)[](https://hyscaler.com/resources/how-to-install-nocodb/)[](https://lindevs.com/install-nocodb-inside-docker-container-in-linux)