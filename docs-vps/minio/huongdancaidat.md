# Hướng dẫn cài đặt

Minio là một **high performance distributed object storage server**, được thiết kế cho cơ sở hạ tầng đám mây riêng quy mô lớn, theo định nghĩa từ trang chủ của Minio.

Nói ngắn gọn, Minio tương tự như dịch vụ **AWS S3**, nhưng được host local. Đây là một object storage server triển khai các public API tương tự AWS S3, nghĩa là các ứng dụng có thể cấu hình để giao tiếp với Minio cũng có thể hoạt động với AWS S3. Minio được sử dụng để lưu trữ **unstructured data** như ảnh, video, log files, backups và container/VM images. Dung lượng của một object có thể từ vài KB đến tối đa **5TB**. Các file được tổ chức trong **buckets**, được truy cập thông qua **access key** khi sử dụng ứng dụng.

## Cách cài đặt Minio

Hướng dẫn này tập trung vào cài đặt cơ bản trên **một node, một disk**, phù hợp cho mục đích cá nhân. Đối với môi trường thương mại, cần cấu hình multi-node và multi-disk.

### Yêu cầu phần cứng (đề xuất)
- **CPU**: 4 core
- **RAM**: 8GB
- **Disk**: 100GB
- **Network Speed**: Càng nhanh càng tốt
- **Hệ điều hành**: AlmaLinux / Ubuntu

### Quá trình cài đặt

> **Lưu ý**: Đảm bảo hệ điều hành chưa cài đặt gì trước khi bắt đầu.

#### 1. Cập nhật OS
Đăng nhập qua SSH và chạy các lệnh sau:

```bash
dnf -y update
dnf -y install wget
```

#### 2. Tải source và cài đặt
Tải source Minio và phân quyền:

```bash
wget https://dl.min.io/server/minio/release/linux-amd64/minio -O /usr/local/bin/minio
sudo chmod +x /usr/local/bin/minio
```

Set SELinux cho file Minio:

```bash
sudo restorecon -v /usr/local/bin/minio
```

Kiểm tra phiên bản Minio:

```bash
minio --version
```

#### 3. Cấu hình Minio
Tạo user và set quyền:

```bash
sudo useradd -r minio-user -s /sbin/nologin
sudo chown minio-user:minio-user /usr/local/bin/minio
```

Tạo thư mục chứa file cấu hình và phân quyền:

```bash
sudo mkdir /etc/minio
sudo chown minio-user:minio-user /etc/minio
```

Phân quyền cho thư mục lưu trữ data:

```bash
sudo chown minio-user:minio-user /mnt/data
```

Nếu thư mục `/mnt/data` chưa tồn tại, tạo nó:

```bash
mkdir /mnt/data
```

Tạo môi trường chạy Minio:

```bash
sudo nano /etc/default/minio
```

Thêm nội dung sau, sau đó bấm `Ctrl + O` để lưu, `Ctrl + X` để thoát:

```bash
MINIO_VOLUMES="/mnt/data"
MINIO_OPTS="-C /etc/minio --address :9000 --console-address :9001"
MINIO_ROOT_USER="minio"
MINIO_ROOT_PASSWORD="ChooseAStrongPassword"
```

Trong đó:
- `MINIO_ROOT_USER`: Tài khoản quản lý Minio.
- `MINIO_ROOT_PASSWORD`: Mật khẩu cho tài khoản quản lý.

#### 4. Cấu hình dịch vụ Minio
Tải file cấu hình dịch vụ và phân quyền SELinux:

```bash
wget https://raw.githubusercontent.com/minio/minio-service/master/linux-systemd/minio.service -O /etc/systemd/system/minio.service
sudo restorecon -v /etc/systemd/system/minio.service
```

Reload hệ thống dịch vụ:

```bash
sudo systemctl daemon-reload
```

Khởi chạy Minio và bật khởi động cùng hệ thống:

```bash
sudo systemctl enable minio
sudo systemctl start minio
```

#### 5. Cài Nginx proxy để thêm domain và SSL
Cài đặt Nginx:

```bash
dnf -y install nginx
systemctl enable nginx
```

Thêm cấu hình tên miền:

```bash
nano /etc/nginx/conf.d/tenmien.com.conf
```

Thêm cấu hình sau, thay `tenmien.com` thành tên miền của bạn, sau đó bấm `Ctrl + O` để lưu và `Ctrl + X` để thoát:

```nginx
upstream minio {
   server 127.0.0.1:9000;
}
upstream minio_ui {
   least_conn;
   server 127.0.0.1:9001;
}
server {
    listen 80;
    server_name tenmien.com;

    # Allow special characters in headers
    ignore_invalid_headers off;
    # Allow any size file to be uploaded
    client_max_body_size 0;
    # Disable buffering
    proxy_buffering off;
    proxy_request_buffering off;

    location / {
        proxy_pass http://minio;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_connect_timeout 300;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        chunked_transfer_encoding off;
    }
    location /admin/ {
        rewrite ^/admin/(.*) /$1 break;
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-NginX-Proxy true;

        real_ip_header X-Real-IP;

        proxy_connect_timeout 300;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        chunked_transfer_encoding off;
        proxy_pass http://minio_ui;
    }
}
```

Điều chỉnh cấu hình môi trường:

```bash
sudo nano /etc/default/minio
```

Sửa nội dung như sau, thay `tenmien.com` thành tên miền của bạn, sau đó bấm `Ctrl + O` để lưu và `Ctrl + X` để thoát:

```bash
MINIO_VOLUMES="/mnt/data"
MINIO_OPTS="-C /etc/minio --address :9000 --console-address :9001"
MINIO_ROOT_USER="minio"
MINIO_ROOT_PASSWORD="ChooseAStrongPassword"
MINIO_SERVER_URL="https://tenmien.com"
MINIO_BROWSER_REDIRECT_URL="https://tenmien.com/admin/"
```

Cài đặt Certbot và SSL:

```bash
dnf -y install certbot python3-certbot-nginx
certbot --nginx -d tenmien.com
```

Khởi động lại Minio và Nginx:

```bash
systemctl restart minio
systemctl restart nginx
```

Nếu gặp lỗi khi restart Nginx, chạy các lệnh sau:

```bash
sudo fuser -k 80/tcp
sudo fuser -k 443/tcp
systemctl restart nginx
```

### Truy cập Minio
Truy cập Minio qua đường dẫn: `https://tenmien.com`.

Chúc bạn thực hiện thành công!