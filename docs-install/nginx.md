# Complete Configuration

## 🚀 System Requirements
- **OS**: Ubuntu 22.04 (recommended)
- **Access**: Root or sudo
- **Domain**: DNS (A record) pointed to server IP (eg: `app3.hitechcloud.dev`)
- **Existing Services**: Ollama and OpenWebUI deployed (following previous instructions)
- **Software**: Nginx, Certbot (for Let's Encrypt)

## 🛠️ Installation Instructions

### 1️⃣ Install Nginx
- Install Nginx:
```bash
sudo apt update
sudo apt install -y nginx
```
- Check Nginx status:
```bash
sudo systemctl status nginx
```

### 2️⃣ Install Certbot to get SSL from Let's Encrypt
- Install Certbot and Nginx plugin:
```bash
sudo apt install -y certbot python3-certbot-nginx
```
- Get SSL certificate for domain:
```bash
sudo certbot --nginx -d yourdomain.vn
```

### 3️⃣ Configure Nginx Proxy for Ollama and OpenWebUI
- Create Nginx configuration file:
```bash
sudo nano /etc/nginx/sites-available/yourdomain.vn
```
- Paste the following content into the file:

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

### 4️⃣ Update Docker Compose to be compatible with Nginx
- Make sure the `.env` file (from the previous tutorial) has the following configuration:
```
HOST_IP=0.0.0.0
OLLAMA_PORT=11434
WEBUI_PORT=18010
```

### 5️⃣ Check access
- Access OpenWebUI: `https://yourdomain.vn`
- Check logs if there are errors:
```bash
docker logs -f ollama
docker logs -f openwebui
sudo tail -f /var/log/nginx/error.log
```