# Cấu hình hoàn chỉnh {#complete-configuration}

## 🚀 Yêu cầu hệ thống {#-system-requirements}
- **Hệ điều hành**: Ubuntu 22.04 (khuyến nghị)
- **Quyền truy cập**: root hoặc sudo
- **Tên miền**: DNS (bản ghi A) trỏ về IP máy chủ (ví dụ: `app3.hitechcloud.dev`)
- **Dịch vụ có sẵn**: Ollama và OpenWebUI đã được triển khai (theo các hướng dẫn trước)
- **Phần mềm**: Nginx, Certbot (để lấy chứng chỉ Let's Encrypt)

## 🛠️ Hướng dẫn cài đặt {#️-installation-instructions}

### 1️⃣ Cài đặt Nginx {#1️⃣-install-nginx}
- Cài đặt Nginx:
```bash
sudo apt update
sudo apt install -y nginx
```
- Kiểm tra trạng thái Nginx:
```bash
sudo systemctl status nginx
```

### 2️⃣ Cài đặt Certbot để lấy SSL từ Let's Encrypt {#2️⃣-install-certbot-to-get-ssl-from-lets-encrypt}
- Cài đặt Certbot và plugin Nginx:
```bash
sudo apt install -y certbot python3-certbot-nginx
```
- Lấy chứng chỉ SSL cho tên miền:
```bash
sudo certbot --nginx -d yourdomain.vn
```

### 3️⃣ Cấu hình Nginx làm proxy cho Ollama và OpenWebUI {#3️⃣-configure-nginx-proxy-for-ollama-and-openwebui}
- Tạo tệp cấu hình Nginx:
```bash
sudo nano /etc/nginx/sites-available/yourdomain.vn
```
- Dán nội dung sau vào tệp:

```
server {
listen 80;
server_name yourdomain.vn;
return 301 https://$host$request_uri;
}

server {
listen 443 ssl http2;
server_name app3.hitechcloud.dev; 

ssl_certificate /etc/letsencrypt/live/namencuaban.vn/fullchain.pem; 
ssl_certificate_key /etc/letsencrypt/live/namencuaban.vn/privkey.pem; 

ssl_protocols TLSv1.2 TLSv1.3; 
ssl_prefer_server_ciphers on; 
ssl_ciphers HIGH:!aNULL:!MD5; 

location / { 
proxy_pass http://127.0.0.1:18010; # OpenWebUI port 
proxy_http_version 1.1; 
proxy_set_header Upgrade $http_upgrade; 
proxy_set_header Connection "upgrade"; 
proxy_set_header Host $host; 
proxy_set_header X-Real-IP $remote_addr; 
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
proxy_set_header X-Forwarded-Proto $scheme; 
}

}
```

### 4️⃣ Cập nhật Docker Compose để tương thích với Nginx {#4️⃣-update-docker-compose-to-be-compatible-with-nginx}
- Bảo đảm tệp `.env` (từ hướng dẫn trước) có cấu hình sau:
```
HOST_IP=0.0.0.0
OLLAMA_PORT=11434
WEBUI_PORT=18010
```

### 5️⃣ Kiểm tra truy cập {#5️⃣-check-access}
- Truy cập OpenWebUI: `https://yourdomain.vn`
- Kiểm tra log nếu có lỗi:
```bash
docker logs -f ollama
docker logs -f openwebui
sudo tail -f /var/log/nginx/error.log
```