# Hướng dẫn cài đặt Trigger.dev v4
## Hướng dẫn cài đặt Trigger.dev v4 với Docker Compose trên Ubuntu 24.04 LTS

**Trigger.dev** là một framework mã nguồn mở giúp đơn giản hóa việc xử lý các **background jobs** như gửi email, xử lý video, tạo báo cáo định kỳ, hoặc đồng bộ dữ liệu với dịch vụ bên thứ ba. Phiên bản v4 mang đến nhiều cải tiến về tự động hóa, bảo mật và quản lý tài nguyên, lý tưởng cho môi trường **production**. Hướng dẫn này sẽ giúp bạn triển khai Trigger.dev v4 trên **Ubuntu 24.04 LTS** sử dụng **Docker Compose**, với cấu hình tối ưu cho hiệu suất và bảo mật.

## Giới thiệu về Trigger.dev
Trigger.dev cung cấp một cách tiếp cận hiện đại để xây dựng và quản lý **background jobs**, với các tính năng nổi bật:
- **Developer Experience (DX)**: Viết mã bất đồng bộ (async) đơn giản, tích hợp hàng đợi, tự động thử lại, và giám sát thời gian thực.
- **Tích hợp AI**: Hỗ trợ các tác vụ AI dài hạn và xây dựng **AI agents**.
- **Tự động hóa**: Tích hợp **registry**, **object storage**, và tự động dọn dẹp container.
- **Bảo mật**: Sử dụng **Docker Socket Proxy** và cách ly mạng mặc định.

Phiên bản v4 cải tiến với:
- Cài đặt đơn giản hơn, không cần script khởi động phức tạp.
- Hỗ trợ **horizontal scaling** cho **worker**.
- **Resource limits** mặc định để tránh tình trạng "noisy neighbors".
- Tích hợp **monitoring stack** (Prometheus, Grafana, Jaeger).

Hướng dẫn này tập trung vào triển khai **production-ready**, bao gồm cả **PostgreSQL**, **Redis**, **MinIO**, và **Nginx** với **SSL** từ Let’s Encrypt.

## Yêu cầu hệ thống (Cập nhật 2025)
### Phần cứng tối thiểu cho Production
**Webapp Server**:
- **CPU**: 4+ vCPU (khuyến nghị 8+ vCPU)
- **RAM**: 8+ GB (khuyến nghị 16+ GB)
- **Storage**: 50+ GB SSD
- **OS**: Ubuntu 24.04 LTS

**Worker Server**:
- **CPU**: 8+ vCPU (khuyến nghị 16+ vCPU)
- **RAM**: 16+ GB (khuyến nghị 32+ GB)
- **Storage**: 100+ GB SSD
- **OS**: Ubuntu 24.04 LTS

**Lưu ý**: Có thể chạy cả **webapp** và **worker** trên cùng một máy cho mục đích thử nghiệm, nhưng nên tách riêng trong **production** để tăng khả năng mở rộng.

### Phần mềm yêu cầu
- **Docker**: 24.0.0+ (khuyến nghị 25.0.0+)
- **Docker Compose**: 2.20.0+ (khuyến nghị 2.38.0+)
- **Git**: 2.34.0+
- **Node.js**: 18.0.0+ (khuyến nghị 20 LTS cho CLI)
- **Python**: 3.9+ (cho Python extension, nếu cần)

## Chuẩn bị môi trường Ubuntu 24.04 LTS
### Bước 1: Cập nhật hệ thống và cài đặt dependencies
1. **Đăng nhập VPS qua SSH**:
   ```bash
   ssh root@server-ip
   ```

2. **Cập nhật hệ thống**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. **Cài đặt các gói cần thiết**:
   ```bash
   sudo apt install -y \
       apt-transport-https \
       ca-certificates \
       curl \
       gnupg \
       lsb-release \
       software-properties-common \
       git \
       htop \
       nano \
       ufw \
       fail2ban \
       unzip \
       wget \
       jq \
       tree
   ```

4. **Cài đặt Node.js 20 LTS**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

5. **Xác minh cài đặt**:
   ```bash
   node --version
   npm --version
   ```

### Bước 2: Cài đặt Docker Engine mới nhất
1. **Gỡ bỏ các phiên bản Docker cũ**:
   ```bash
   sudo apt-get remove -y docker docker-engine docker.io containerd runc
   ```

2. **Thêm GPG key của Docker**:
   ```bash
   sudo mkdir -p /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   ```

3. **Thêm repository Docker**:
   ```bash
   echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

4. **Cài đặt Docker Engine**:
   ```bash
   sudo apt-get update
   sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

5. **Thêm user vào nhóm Docker**:
   ```bash
   sudo usermod -aG docker $USER
   newgrp docker
   ```

6. **Kích hoạt và khởi động Docker**:
   ```bash
   sudo systemctl enable docker
   sudo systemctl start docker
   ```

7. **Xác minh cài đặt**:
   ```bash
   docker --version
   docker compose version
   ```

### Bước 3: Cấu hình Docker cho Production
1. **Tạo cấu hình Docker daemon**:
   ```bash
   sudo mkdir -p /etc/docker
   sudo tee /etc/docker/daemon.json > /dev/null <<EOF
   {
     "log-driver": "json-file",
     "log-opts": {
       "max-size": "10m",
       "max-file": "3"
     },
     "storage-driver": "overlay2",
     "storage-opts": [
       "overlay2.override_kernel_check=true"
     ],
     "live-restore": true,
     "userland-proxy": false,
     "experimental": false,
     "metrics-addr": "127.0.0.1:9323",
     "exec-opts": ["native.cgroupdriver=systemd"],
     "default-ulimits": {
       "nofile": {
         "name": "nofile",
         "hard": 65536,
         "soft": 65536
       }
     }
   }
   EOF
   ```

2. **Khởi động lại Docker**:
   ```bash
   sudo systemctl restart docker
   ```

3. **Kiểm tra cài đặt Docker**:
   ```bash
   docker run --rm hello-world
   ```

### Bước 4: Cài đặt Trigger.dev v4 CLI
1. **Cài đặt CLI toàn cục**:
   ```bash
   npm install -g @trigger.dev/cli@v4-beta
   ```

2. **Xác minh cài đặt**:
   ```bash
   npx trigger.dev@v4-beta --version
   ```

3. **Cài đặt shell completion (khuyến nghị)**:
   ```bash
   npx trigger.dev@v4-beta completion >> ~/.bashrc
   source ~/.bashrc
   ```

## Cài đặt Trigger.dev v4 cho Production
### Bước 1: Tạo cấu trúc thư mục
1. **Tạo thư mục chính**:
   ```bash
   sudo mkdir -p /opt/trigger.dev/{webapp,worker,shared,backups,logs,ssl}
   sudo chown -R $USER:$USER /opt/trigger.dev
   cd /opt/trigger.dev
   ```

2. **Clone repository Trigger.dev**:
   ```bash
   git clone --depth=1 https://github.com/triggerdotdev/trigger.dev
   cd trigger.dev/hosting/docker
   ```

### Bước 2: Cấu hình Environment Variables cho Webapp
1. **Sao chép file mẫu**:
   ```bash
   cd webapp
   cp .env.example .env
   nano .env
   ```

2. **Cấu hình file `.env` (webapp/.env)**:
   ```env
   # =============================================================================
   # TRIGGER.DEV WEBAPP CONFIGURATION - PRODUCTION READY
   # =============================================================================

   # Application Settings
   APP_ORIGIN=https://trigger.yourdomain.com
   LOGIN_ORIGIN=https://trigger.yourdomain.com
   APP_ENV=production
   LOG_LEVEL=info
   NODE_ENV=production

   # Database Configuration (PostgreSQL 15+)
   DATABASE_URL=postgresql://trigger_user:your_secure_db_password@postgres:5432/trigger_production

   # Redis Configuration
   REDIS_URL=redis://redis:6379/0

   # Security Keys (Generate with: openssl rand -base64 64)
   SECRET_KEY_BASE=your-super-secure-secret-key-base-64-chars-minimum-change-this
   ENCRYPTION_KEY=your-32-char-encryption-key-here
   SESSION_SECRET=your-session-secret-here-change-this

   # Docker Registry Configuration
   REGISTRY_URL=registry.yourdomain.com:5000
   REGISTRY_USERNAME=trigger_registry
   REGISTRY_PASSWORD=your_very_secure_registry_password

   # Object Storage (MinIO/S3)
   STORAGE_ENDPOINT=https://storage.yourdomain.com
   STORAGE_ACCESS_KEY=your_minio_access_key
   STORAGE_SECRET_KEY=your_minio_secret_key
   STORAGE_BUCKET=trigger-packets
   STORAGE_REGION=us-east-1
   STORAGE_PUBLIC_HOST=https://storage.yourdomain.com

   # Email Configuration - Production SMTP
   EMAIL_TRANSPORT=smtp
   FROM_EMAIL=noreply@yourdomain.com
   REPLY_TO_EMAIL=support@yourdomain.com
   SMTP_HOST=smtp.yourdomain.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=noreply@yourdomain.com
   SMTP_PASSWORD=your_smtp_password

   # GitHub OAuth (Optional but recommended)
   AUTH_GITHUB_CLIENT_ID=your_github_oauth_client_id
   AUTH_GITHUB_CLIENT_SECRET=your_github_oauth_client_secret

   # Access Control (Regex pattern for allowed emails)
   WHITELISTED_EMAILS="admin@yourdomain\.com|team@yourdomain\.com|.*@yourdomain\.com"

   # Multi-Factor Authentication
   MFA_ENABLED=true
   MFA_ISSUER="Trigger.dev - yourdomain.com"
   MFA_REQUIRED_FOR_ADMIN=true

   # Docker Image Configuration
   TRIGGER_IMAGE_TAG=v4.0.0-beta.22

   # Monitoring and Telemetry
   TRIGGER_TELEMETRY_DISABLED=false
   OTEL_EXPORTER_ENABLED=true
   OTEL_ENDPOINT=http://jaeger:14268/api/traces

   # Performance Settings
   WORKER_CONCURRENCY=20
   MAX_TASK_DURATION=3600000
   TASK_HEARTBEAT_INTERVAL=30000

   # processKeepAlive
   PROCESS_KEEP_ALIVE_ENABLED=true
   PROCESS_KEEP_ALIVE_TIMEOUT=300000

   # Realtime Configuration
   REALTIME_ENABLED=true
   REALTIME_SKIP_COLUMNS=created_at,updated_at,internal_metadata

   # Security Headers
   SECURITY_HEADERS_ENABLED=true
   CONTENT_SECURITY_POLICY="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"

   # Rate Limiting
   RATE_LIMITING_ENABLED=true
   RATE_LIMIT_REQUESTS_PER_MINUTE=100

   # Backup Configuration
   BACKUP_ENABLED=true
   BACKUP_SCHEDULE="0 2 * * *"
   BACKUP_RETENTION_DAYS=30
   ```

3. **Tạo key bảo mật**:
   ```bash
   echo "SECRET_KEY_BASE=$(openssl rand -base64 64)"
   echo "ENCRYPTION_KEY=$(openssl rand -base64 32)"
   echo "SESSION_SECRET=$(openssl rand -base64 64)"
   ```

### Bước 3: Cấu hình Environment Variables cho Worker
1. **Sao chép file mẫu**:
   ```bash
   cd ../worker
   cp .env.example .env
   nano .env
   ```

2. **Cấu hình file `.env` (worker/.env)**:
   ```env
   # =============================================================================
   # TRIGGER.DEV WORKER CONFIGURATION - PRODUCTION READY
   # =============================================================================

   # Supervisor Configuration
   SUPERVISOR_URL=https://trigger.yourdomain.com
   SUPERVISOR_API_KEY=your_supervisor_api_key_here

   # Worker Token (Will be generated after webapp startup)
   # TRIGGER_WORKER_TOKEN=tr_wgt_will_be_generated_after_webapp_starts

   # Docker Registry Configuration
   REGISTRY_URL=registry.yourdomain.com:5000
   REGISTRY_USERNAME=trigger_registry
   REGISTRY_PASSWORD=your_very_secure_registry_password

   # Worker Performance Configuration
   WORKER_CONCURRENCY=50
   WORKER_MEMORY_LIMIT=2048m
   WORKER_CPU_LIMIT=2.0
   WORKER_TIMEOUT=3600000

   # processKeepAlive Configuration
   PROCESS_KEEP_ALIVE_ENABLED=true
   PROCESS_KEEP_ALIVE_TIMEOUT=300000
   PROCESS_KEEP_ALIVE_MAX_PROCESSES=10

   # Docker Image Configuration
   TRIGGER_IMAGE_TAG=v4.0.0-beta.22
   ```

### Bước 4: Tạo cấu hình Docker Compose cho Production
1. **Tạo file `webapp/docker-compose.prod.yml`**:
   ```yaml
   version: '3.8'

   services:
     webapp:
       image: triggerdotdev/webapp:${TRIGGER_IMAGE_TAG:-v4.0.0-beta.22}
       container_name: trigger_webapp
       restart: unless-stopped
       ports:
         - "127.0.0.1:8030:8030"
       env_file:
         - .env
       depends_on:
         - postgres
         - redis
         - registry
         - minio
         - socket-proxy
       volumes:
         - webapp_data:/app/data
         - webapp_logs:/app/logs
         - shared_data:/home/node/shared
         - backup_data:/backups
       networks:
         - trigger_network
       deploy:
         resources:
           limits:
             cpus: '4.0'
             memory: 8G
           reservations:
             cpus: '2.0'
             memory: 4G
       healthcheck:
         test: ["CMD", "curl", "-f", "http://localhost:8030/health"]
         interval: 30s
         timeout: 10s
         retries: 5
         start_period: 60s

     postgres:
       image: postgres:15-alpine
       container_name: trigger_postgres
       restart: unless-stopped
       environment:
         - POSTGRES_DB=trigger_production
         - POSTGRES_USER=trigger_user
         - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
       volumes:
         - postgres_data:/var/lib/postgresql/data
       networks:
         - trigger_network
       deploy:
         resources:
           limits:
             cpus: '2.0'
             memory: 4G
           reservations:
             cpus: '1.0'
             memory: 2G
       healthcheck:
         test: ["CMD-SHELL", "pg_isready -U trigger_user -d trigger_production"]
         interval: 10s
         timeout: 5s
         retries: 5

     redis:
       image: redis:7-alpine
       container_name: trigger_redis
       restart: unless-stopped
       networks:
         - trigger_network
       deploy:
         resources:
           limits:
             cpus: '1.0'
             memory: 2G
           reservations:
             cpus: '0.5'
             memory: 1G
       healthcheck:
         test: ["CMD", "redis-cli", "ping"]
         interval: 10s
         timeout: 5s
         retries: 3

     registry:
       image: registry:2.8
       container_name: trigger_registry
       restart: unless-stopped
       ports:
         - "127.0.0.1:5000:5000"
       environment:
         - REGISTRY_AUTH=htpasswd
         - REGISTRY_AUTH_HTPASSWD_PATH=/auth/htpasswd
         - REGISTRY_STORAGE_DELETE_ENABLED=true
       volumes:
         - registry_data:/var/lib/registry
         - ./registry/auth:/auth:ro
         - ./registry/certs:/certs:ro
       networks:
         - trigger_network
       healthcheck:
         test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:5000/v2/"]
         interval: 30s
         timeout: 10s
         retries: 3

     minio:
       image: minio/minio:RELEASE.2025-07-05T18-35-37Z
       container_name: trigger_minio
       restart: unless-stopped
       ports:
         - "127.0.0.1:9000:9000"
         - "127.0.0.1:9001:9001"
       environment:
         - MINIO_ROOT_USER=${STORAGE_ACCESS_KEY}
         - MINIO_ROOT_PASSWORD=${STORAGE_SECRET_KEY}
       command: server /data --console-address ":9001"
       volumes:
         - minio_data:/data
         - ./minio/certs:/root/.minio/certs:ro
       networks:
         - trigger_network
       healthcheck:
         test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
         interval: 30s
         timeout: 20s
         retries: 3

     socket-proxy:
       image: tecnativa/docker-socket-proxy:latest
       container_name: trigger_socket_proxy
       restart: unless-stopped
       environment:
         - CONTAINERS=1
         - IMAGES=1
         - NETWORKS=1
         - VOLUMES=1
       volumes:
         - /var/run/docker.sock:/var/run/docker.sock:ro
       networks:
         - trigger_network

     prometheus:
       image: prom/prometheus:latest
       container_name: trigger_prometheus
       restart: unless-stopped
       ports:
         - "127.0.0.1:9090:9090"
       volumes:
         - prometheus_data:/prometheus
         - ./monitoring/prometheus.yml:/etc/prometheus/prometheus.yml:ro
       networks:
         - trigger_network

     grafana:
       image: grafana/grafana:latest
       container_name: trigger_grafana
       restart: unless-stopped
       ports:
         - "127.0.0.1:3000:3000"
       environment:
         - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
         - GF_USERS_ALLOW_SIGN_UP=false
       volumes:
         - grafana_data:/var/lib/grafana
       networks:
         - trigger_network

     jaeger:
       image: jaegertracing/all-in-one:latest
       container_name: trigger_jaeger
       restart: unless-stopped
       ports:
         - "127.0.0.1:16686:16686"
         - "127.0.0.1:14268:14268"
       environment:
         - COLLECTOR_OTLP_ENABLED=true
       networks:
         - trigger_network

   volumes:
     webapp_data:
     webapp_logs:
     postgres_data:
     redis_data:
     registry_data:
     minio_data:
     shared_data:
     backup_data:
     prometheus_data:
     grafana_data:
     jaeger_data:

   networks:
     trigger_network:
       driver: bridge
   ```

### Bước 5: Tạo xác thực cho Registry
1. **Tạo thư mục cho xác thực và chứng chỉ**:
   ```bash
   mkdir -p registry/auth registry/certs
   ```

2. **Tạo file htpasswd**:
   ```bash
   docker run --rm --entrypoint htpasswd registry:2.8 -Bbn trigger_registry your_very_secure_registry_password > registry/auth/htpasswd
   ```

3. **Xác minh file htpasswd**:
   ```bash
   cat registry/auth/htpasswd
   ```

### Bước 6: Khởi động Webapp Stack
1. **Tạo file `.env.local` cho secrets**:
   ```bash
   echo "POSTGRES_PASSWORD=your_secure_db_password" > .env.local
   echo "GRAFANA_PASSWORD=your_secure_grafana_password" >> .env.local
   ```

2. **Khởi động stack**:
   ```bash
   docker compose -f docker-compose.prod.yml --env-file .env.local up -d
   ```

3. **Kiểm tra trạng thái container**:
   ```bash
   docker compose -f docker-compose.prod.yml ps
   ```

4. **Theo dõi logs của webapp**:
   ```bash
   docker compose -f docker-compose.prod.yml logs -f webapp
   ```

### Bước 7: Cấu hình Nginx Reverse Proxy với SSL
1. **Cài đặt Certbot và Nginx**:
   ```bash
   sudo apt install -y certbot python3-certbot-nginx nginx
   ```

2. **Lấy chứng chỉ SSL**:
   ```bash
   sudo certbot --nginx -d trigger.yourdomain.com -d registry.yourdomain.com -d storage.yourdomain.com -d console.storage.yourdomain.com
   ```

3. **Sao chép chứng chỉ cho MinIO và Registry**:
   ```bash
   sudo cp /etc/letsencrypt/live/storage.yourdomain.com/fullchain.pem minio/certs/public.crt
   sudo cp /etc/letsencrypt/live/storage.yourdomain.com/privkey.pem minio/certs/private.key
   sudo cp /etc/letsencrypt/live/registry.yourdomain.com/fullchain.pem registry/certs/domain.crt
   sudo cp /etc/letsencrypt/live/registry.yourdomain.com/privkey.pem registry/certs/domain.key
   sudo chown -R $USER:$USER minio/certs registry/certs
   chmod 600 minio/certs/private.key registry/certs/domain.key
   ```

4. **Tạo file cấu hình Nginx**:
   ```bash
   sudo nano /etc/nginx/sites-available/trigger.dev
   ```

5. **Cấu hình Nginx**:
   ```nginx
   limit_req_zone $binary_remote_addr zone=webapp:10m rate=10r/s;
   limit_req_zone $binary_remote_addr zone=registry:10m rate=5r/s;

   server {
       listen 80;
       server_name trigger.yourdomain.com;
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name trigger.yourdomain.com;

       ssl_certificate /etc/letsencrypt/live/trigger.yourdomain.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/trigger.yourdomain.com/privkey.pem;
       include /etc/letsencrypt/options-ssl-nginx.conf;
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

       add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-Content-Type-Options "nosniff" always;

       limit_req zone=webapp burst=20 nodelay;

       location / {
           proxy_pass http://127.0.0.1:8030;
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

   server {
       listen 80;
       server_name registry.yourdomain.com;
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name registry.yourdomain.com;

       ssl_certificate /etc/letsencrypt/live/registry.yourdomain.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/registry.yourdomain.com/privkey.pem;
       include /etc/letsencrypt/options-ssl-nginx.conf;
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

       limit_req zone=registry burst=10 nodelay;

       location / {
           proxy_pass http://127.0.0.1:5000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }

   server {
       listen 80;
       server_name storage.yourdomain.com console.storage.yourdomain.com;
       return 301 https://$server_name$request_uri;
   }

   server {
       listen 443 ssl http2;
       server_name storage.yourdomain.com;

       ssl_certificate /etc/letsencrypt/live/storage.yourdomain.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/storage.yourdomain.com/privkey.pem;
       include /etc/letsencrypt/options-ssl-nginx.conf;
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

       location / {
           proxy_pass http://127.0.0.1:9000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }

   server {
       listen 443 ssl http2;
       server_name console.storage.yourdomain.com;

       ssl_certificate /etc/letsencrypt/live/storage.yourdomain.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/storage.yourdomain.com/privkey.pem;
       include /etc/letsencrypt/options-ssl-nginx.conf;
       ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

       location / {
           proxy_pass http://127.0.0.1:9001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

6. **Kích hoạt và khởi động Nginx**:
   ```bash
   sudo ln -s /etc/nginx/sites-available/trigger.dev /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Bước 8: Lấy Worker Token và cấu hình Worker
1. **Kiểm tra logs để lấy Worker Token**:
   ```bash
   cd ../webapp
   docker compose -f docker-compose.prod.yml logs webapp | grep "Worker Token"
   ```

2. **Cập nhật Worker Token trong file `.env`**:
   ```bash
   cd ../worker
   nano .env
   ```
   Thêm hoặc cập nhật dòng:
   ```env
   TRIGGER_WORKER_TOKEN=tr_wgt_your_worker_token_here
   ```

### Bước 9: Tạo và khởi động Worker
1. **Tạo file `worker/docker-compose.prod.yml`**:
   ```yaml
   version: '3.8'

   services:
     supervisor:
       image: triggerdotdev/supervisor:${TRIGGER_IMAGE_TAG:-v4.0.0-beta.22}
       container_name: trigger_supervisor
       restart: unless-stopped
       env_file:
         - .env
       volumes:
         - worker_data:/app/data
         - worker_logs:/app/logs
         - shared_data:/home/node/shared
         - /var/run/docker.sock:/var/run/docker.sock
       networks:
         - trigger_network
       deploy:
         resources:
           limits:
             cpus: '8.0'
             memory: 16G
           reservations:
             cpus: '4.0'
             memory: 8G

   volumes:
     worker_data:
     worker_logs:
     shared_data:

   networks:
     trigger_network:
       driver: bridge
   ```

2. **Khởi động Worker stack**:
   ```bash
   docker compose -f docker-compose.prod.yml up -d
   ```

3. **Kiểm tra trạng thái và logs**:
   ```bash
   docker compose -f docker-compose.prod.yml ps
   docker compose -f docker-compose.prod.yml logs -f supervisor
   ```

## Sử dụng Trigger.dev v4
### Truy cập Web UI và đăng nhập với MFA
1. **Truy cập URL**:
   - Mở trình duyệt và truy cập: `https://trigger.yourdomain.com`.
2. **Đăng nhập**:
   - Sử dụng **magic link** (kiểm tra logs webapp nếu không nhận được email) hoặc **GitHub OAuth**.
3. **Kích hoạt MFA**:
   - Vào **Account Settings** để bật **Multi-Factor Authentication** nhằm tăng cường bảo mật.

### Khởi tạo dự án mới
1. **Tạo thư mục dự án**:
   ```bash
   mkdir my-trigger-project && cd my-trigger-project
   ```

2. **Đăng nhập vào instance tự host**:
   ```bash
   npx trigger.dev@v4-beta login -a https://trigger.yourdomain.com
   ```

3. **Khởi tạo dự án Trigger.dev**:
   ```bash
   npx trigger.dev@v4-beta init
   ```

4. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

5. **Chạy local development server**:
   ```bash
   npx trigger.dev@v4-beta dev
   ```

### Tạo Task với tính năng mới
Ví dụ dưới đây sử dụng tính năng **processKeepAlive** để tăng tốc độ thực thi:
```javascript
// src/triggers.ts
import { task, wait } from "@trigger.dev/sdk/v4";

export const myAdvancedTask = task({
  id: "my-advanced-task",
  processKeepAlive: true, // Sử dụng processKeepAlive để khởi động nhanh hơn
  run: async (payload: { message: string }) => {
    await task.setMetadata({ start: new Date().toISOString() });
    console.log("Received payload:", payload.message);

    await wait.for({ seconds: 5 });

    await task.setMetadata({ end: new Date().toISOString() });
    return { success: true, message: "Task completed!" };
  },
});
```

### Triển khai và giám sát từ CLI
1. **Triển khai tasks**:
   ```bash
   npx trigger.dev@v4-beta deploy
   ```

2. **Liệt kê các runs gần đây**:
   ```bash
   npx trigger.dev@v4-beta runs list
   ```

3. **Xem chi tiết run cụ thể**:
   ```bash
   npx trigger.dev@v4-beta runs show <run-id>
   ```

4. **Hủy hoặc chạy lại run**:
   ```bash
   npx trigger.dev@v4-beta runs cancel <run-id>
   npx trigger.dev@v4-beta runs replay <run-id>
   ```

## Quản lý và giám sát Production
### Sao lưu tự động
1. **Tạo script sao lưu** (`/opt/trigger.dev/backup.sh`):
   ```bash
   nano /opt/trigger.dev/backup.sh
   ```
   Nội dung:
   ```bash
   #!/bin/bash
   # Trigger.dev Production Backup Script
   BACKUP_DIR="/opt/trigger.dev/backups"
   DATE=$(date +%Y%m%d_%H%M%S)
   RETENTION_DAYS=30
   DOCKER_COMPOSE_FILE="/opt/trigger.dev/trigger.dev/hosting/docker/webapp/docker-compose.prod.yml"

   echo "Starting backup at $(date)"

   # Backup PostgreSQL
   docker compose -f $DOCKER_COMPOSE_FILE exec -T postgres pg_dump -U trigger_user trigger_production | gzip > ${BACKUP_DIR}/postgres_${DATE}.sql.gz

   # Backup MinIO Data
   docker compose -f $DOCKER_COMPOSE_FILE exec -T minio mc mirror --overwrite /data /backups/minio_${DATE}/

   # Clean up old backups
   find ${BACKUP_DIR} -name "*.sql.gz" -mtime +${RETENTION_DAYS} -delete
   find ${BACKUP_DIR} -type d -name "minio_*" -mtime +${RETENTION_DAYS} -exec rm -rf {} +

   echo "Backup completed at $(date)"
   ```

2. **Cấp quyền thực thi**:
   ```bash
   chmod +x /opt/trigger.dev/backup.sh
   ```

3. **Thêm vào crontab để chạy hàng ngày**:
   ```bash
   crontab -e
   ```
   Thêm dòng:
   ```bash
   0 2 * * * /opt/trigger.dev/backup.sh >> /opt/trigger.dev/logs/backup.log 2>&1
   ```

### Kiểm tra sức khỏe và cảnh báo
1. **Kiểm tra sức khỏe dịch vụ**:
   - **Webapp**: `https://trigger.yourdomain.com/health`
   - **MinIO**: `https://storage.yourdomain.com/minio/health/live`
   - **Registry**: `https://registry.yourdomain.com/v2/`

2. **Cấu hình alerting**:
   - Sử dụng **Prometheus Alertmanager** (đã tích hợp trong stack) để nhận thông báo về tài nguyên cao, dịch vụ ngừng hoạt động, hoặc lỗi task.
   - Cài đặt công cụ như **Uptime Kuma** để giám sát liên tục:
     ```bash
     docker run -d --restart=always -p 3001:3001 --name uptime-kuma louislam/uptime-kuma:latest
     ```

## Xử lý lỗi
- **Không truy cập được Web UI**:
  - Kiểm tra trạng thái Nginx: `sudo systemctl status nginx`
  - Kiểm tra logs webapp: `docker compose -f docker-compose.prod.yml logs webapp`
- **Tasks không hoàn thành**:
  - Kiểm tra logs supervisor: `docker compose -f worker/docker-compose.prod.yml logs supervisor`
  - Xem issue #1668 trên GitHub để biết các lỗi liên quan đến tasks bị kẹt.[](https://github.com/triggerdotdev/trigger.dev/issues/1668)
- **Lỗi Registry**:
  - Đảm bảo đã đăng nhập vào registry trên máy chạy deploy:
    ```bash
    docker login -u trigger_registry registry.yourdomain.com:5000
    ```
- **Lỗi Email Magic Link**:
  - Kiểm tra cấu hình SMTP trong `.env` và logs webapp.
  - Nếu không nhận được email, kiểm tra logs: `docker compose -f docker-compose.prod.yml logs webapp | grep "Magic Link"`

## Kết luận
Trigger.dev v4 cung cấp một giải pháp mạnh mẽ và linh hoạt để triển khai **background jobs** trong môi trường **production**. Với cài đặt **Docker Compose** đơn giản, tích hợp **registry**, **object storage**, và **monitoring stack**, bạn có thể dễ dàng mở rộng và quản lý hệ thống. Hướng dẫn này đảm bảo triển khai an toàn với **SSL**, **MFA**, và **backup** tự động, phù hợp cho các yêu cầu **compliance** nghiêm ngặt.

Hãy tham gia kênh **self-hosting** trên Discord của Trigger.dev để được hỗ trợ cộng đồng nếu cần![](https://trigger.dev/blog/self-hosting-trigger-dev-v4-docker)

Chúc bạn triển khai thành công!