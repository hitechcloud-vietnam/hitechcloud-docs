# Hướng dẫn cài đặt Flowise AI với Docker Compose trên Ubuntu

**Flowise AI** là một nền tảng mã nguồn mở sử dụng giao diện **drag-and-drop** để tạo các **AI workflows** và **agents** dựa trên **LangChain.js**. Với thiết kế trực quan, Flowise giúp cả người dùng không kỹ thuật và lập trình viên xây dựng các ứng dụng **Large Language Model (LLM)** một cách dễ dàng, từ **prototyping** đến triển khai **production**. Hướng dẫn này sẽ giúp bạn triển khai Flowise AI trên **Ubuntu 22.04 LTS** hoặc **24.04 LTS** sử dụng **Docker Compose**, với cấu hình tối ưu cho môi trường **production**.

## Flowise AI là gì?
Flowise AI là một **visual builder** mã nguồn mở cho phép người dùng thiết kế các **AI workflows** và **agents** mà không cần viết nhiều mã. Được xây dựng trên **LangChain.js**, Flowise cung cấp giao diện kéo thả để kết nối các **nodes** như **LLMs**, **memory**, **data loaders**, **caching**, và **tools**, giúp tạo ra các ứng dụng AI mạnh mẽ.

Flowise phù hợp cho:
- **Prototyping nhanh**: Dễ dàng thử nghiệm ý tưởng AI.
- **Production deployment**: Hỗ trợ **API**, **SDK** (Python/React), và triển khai **on-premise**.
- **Doanh nghiệp lớn**: Được tin dùng bởi Thermo Fisher, Deloitte, Accenture, AWS.

### Các tính năng chính
- **Visual Workflow Builder**: Thiết kế logic phức tạp bằng giao diện kéo thả, hỗ trợ cộng tác giữa các đội kỹ thuật và không kỹ thuật.
- **LLM Orchestration**: Kết nối **LLMs** với **memory**, **data loaders**, **caching**, và **custom tools**.
- **Retrieval-Augmented Generation (RAG)**: Tích hợp tài liệu (PDF, DOCX, CSV) để xây dựng **chatbots** trả lời dựa trên dữ liệu.
- **Agent & Multi-Agent**: Tạo **agents** tự động thực thi **tools**, chạy mã, gọi **API**, và giải quyết các tác vụ đa bước qua **Agentflow**.
- **Tích hợp đa dạng**: Hỗ trợ 100+ **LLMs**, **embedding models**, và **vector databases** (OpenAI, Google, Anthropic, và các mô hình mã nguồn mở).
- **Production-Ready**: Cung cấp **API**, **SDK**, **embeddable widgets**, **observability**, và **Human-in-the-Loop**.

### Tại sao dùng Docker Compose?
So sánh các phương pháp triển khai Flowise:
| Phương pháp         | Dễ sử dụng | Chi phí                     | Khả năng mở rộng | Tùy chỉnh | Bảo trì       |
|---------------------|------------|-----------------------------|------------------|-----------|---------------|
| Flowise Cloud       | Rất cao    | Miễn phí + từ $35/tháng     | Cao (managed)    | Thấp      | Tối thiểu     |
| NPM (Local Install) | Cao        | Miễn phí (infrastructure)   | Thấp             | Trung bình | Thủ công      |
| Docker Compose      | Trung bình  | Miễn phí (infrastructure)   | Cao              | Rất cao   | Tự động hóa   |

**Docker Compose** là lựa chọn tối ưu vì:
- **Kiểm soát toàn diện**: Định nghĩa toàn bộ stack (Flowise, database, dependencies) trong một file YAML.
- **Môi trường nhất quán**: Đảm bảo triển khai đồng bộ trên các máy khác nhau.
- **Dễ dàng mở rộng**: Hỗ trợ scale và tích hợp với **vector databases** hoặc **LLMs** khác.
- **Bảo trì đơn giản**: Dễ dàng cập nhật và sao lưu.

## Yêu cầu hệ thống
- **Hệ điều hành**: Ubuntu 22.04 LTS hoặc 24.04 LTS.
- **RAM**: Tối thiểu 2GB (khuyến nghị 4GB+ cho production).
- **CPU**: Tối thiểu 1 core (khuyến nghị 2 core+).
- **Storage**: Tối thiểu 10GB SSD (khuyến nghị 20GB+).
- **Tên miền**: Cần thiết nếu muốn cấu hình **SSL** qua Let’s Encrypt.
- **Quyền truy cập**: Root hoặc sudo qua SSH.
- **Kết nối internet**: Ổn định để tải Docker và các hình ảnh container.

## Chuẩn bị môi trường Ubuntu
### Bước 1: Cài đặt Git
Git cần thiết để clone repository Flowise.
```bash
sudo apt update
sudo apt install git-all -y
git --version
```

### Bước 2: Cài đặt Docker Engine
Cài đặt Docker từ repository chính thức để đảm bảo phiên bản mới nhất.
```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin -y
```

Thêm user vào nhóm Docker:
```bash
sudo usermod -aG docker ${USER}
```

Đăng xuất và đăng nhập lại để áp dụng thay đổi.

### Bước 3: Cài đặt Docker Compose Plugin
```bash
sudo apt install docker-compose-plugin -y
docker compose version
```

## Triển khai Flowise AI với Docker Compose
### Bước 1: Clone repository Flowise
```bash
git clone https://github.com/FlowiseAI/Flowise.git
cd Flowise/docker
```

### Bước 2: Cấu hình file Environment
1. **Sao chép file mẫu**:
   ```bash
   cp .env.example .env
   nano .env
   ```

2. **Cấu hình file `.env`**:
   ```env
   PORT=3000
   FLOWISE_USERNAME=admin
   FLOWISE_PASSWORD=your_secure_password
   DATABASE_TYPE=postgres
   DATABASE_URL=postgresql://flowise_user:your_secure_db_password@postgres:5432/flowise_db
   CORS_ORIGINS=https://yourdomain.com
   IFRAME_ORIGINS=https://yourdomain.com
   ```

   - **PORT**: Cổng mà Flowise sẽ chạy (mặc định 3000).
   - **FLOWISE_USERNAME** / **FLOWISE_PASSWORD**: Thông tin đăng nhập cho dashboard admin.
   - **DATABASE_TYPE**: Đặt thành `postgres` để sử dụng PostgreSQL trong **production**.
   - **CORS_ORIGINS** / **IFRAME_ORIGINS**: Thêm tên miền nếu nhúng Flowise vào ứng dụng web khác.

### Bước 3: Tạo file `docker-compose.yml`
Tạo file `docker-compose.yml` với nội dung sau để triển khai Flowise cùng PostgreSQL:
```yaml
version: '3.8'

services:
  flowise:
    image: flowiseai/flowise:latest
    container_name: flowise
    restart: unless-stopped
    environment:
      - PORT=${PORT}
      - FLOWISE_USERNAME=${FLOWISE_USERNAME}
      - FLOWISE_PASSWORD=${FLOWISE_PASSWORD}
      - DATABASE_TYPE=${DATABASE_TYPE}
      - DATABASE_URL=${DATABASE_URL}
      - CORS_ORIGINS=${CORS_ORIGINS}
      - IFRAME_ORIGINS=${IFRAME_ORIGINS}
    ports:
      - '${PORT}:3000'
    volumes:
      - flowise_data:/root/.flowise
    networks:
      - flowise_network
    depends_on:
      - postgres
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:${PORT}/health"]
      interval: 30s
      timeout: 10s
      retries: 5

  postgres:
    image: postgres:15-alpine
    container_name: flowise_postgres
    restart: unless-stopped
    environment:
      - POSTGRES_DB=flowise_db
      - POSTGRES_USER=flowise_user
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - flowise_network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U flowise_user -d flowise_db"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  flowise_data:
  postgres_data:

networks:
  flowise_network:
    driver: bridge
```

### Bước 4: Tạo file `.env.local` cho secrets
```bash
echo "POSTGRES_PASSWORD=your_secure_db_password" > .env.local
```

### Bước 5: Khởi động Flowise
```bash
docker compose --env-file .env.local up -d
```

Kiểm tra trạng thái container:
```bash
docker compose ps
```

Xem logs để kiểm tra khởi động:
```bash
docker compose logs -f flowise
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
   sudo nano /etc/nginx/sites-available/flowise
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
           proxy_pass http://127.0.0.1:3000;
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
   sudo ln -s /etc/nginx/sites-available/flowise /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Bước 7: Truy cập Flowise
- Mở trình duyệt và truy cập: `https://yourdomain.com` hoặc `http://<your-server-ip>:3000` (nếu không dùng SSL).
- Đăng nhập bằng **FLOWISE_USERNAME** và **FLOWISE_PASSWORD** đã cấu hình trong `.env`.

## Xây dựng Chatflow đầu tiên
### Mục tiêu: Tạo một **Joke Bot** đơn giản
**Joke Bot** sẽ trả lời bằng một câu đùa về chủ đề do người dùng cung cấp.

1. **Tạo Chatflow mới**:
   - Vào dashboard, nhấp **Add New** để tạo **chatflow**.
2. **Thêm các nodes**:
   - **Prompt Template**: Nhập template: `Tell me a joke about {topic}`.
   - **Chat Model**: Chọn mô hình, ví dụ: **ChatOpenAI** (yêu cầu API key) hoặc mô hình mã nguồn mở qua **Ollama**.
   - **LLM Chain**: Kết nối **Prompt Template** và **Chat Model**.
3. **Kết nối nodes**:
   - Kết nối **Prompt Template** → **LLM Chain** (Prompt input).
   - Kết nối **Chat Model** → **LLM Chain** (Language Model input).
4. **Cấu hình LLM Chain**:
   - Map biến `{topic}` với **User Question** từ **Chat Input**.
5. **Lưu và kiểm tra**:
   - Lưu **chatflow**, nhấp vào biểu tượng chat, nhập chủ đề (ví dụ: "cats") và kiểm tra kết quả.

## Các bước tiếp theo
- **Xây dựng RAG Chatbot**: Tích hợp tài liệu (PDF, CSV) với **vector database** để trả lời dựa trên dữ liệu.
- **Sử dụng Tools với Agents**: Thêm **tools** như máy tính, tìm kiếm web, hoặc gọi **API** để mở rộng khả năng **chatbot**.
- **Nhúng hoặc gọi qua API**: Sử dụng **embed widgets** cho website hoặc gọi **chatflows** qua **REST API**.
- **Cập nhật Flowise**:
   ```bash
   cd Flowise/docker
   docker compose pull
   docker compose up -d
   ```

## Xử lý lỗi
- **Không truy cập được Web UI**:
  - Kiểm tra trạng thái Nginx: `sudo systemctl status nginx`
  - Kiểm tra logs Flowise: `docker compose logs flowise`
- **Lỗi PostgreSQL**:
  - Kiểm tra logs: `docker compose logs postgres`
  - Đảm bảo `POSTGRES_PASSWORD` trong `.env.local` khớp với `DATABASE_URL` trong `.env`.
- **Không kết nối được với LLM**:
  - Đảm bảo API key (nếu dùng OpenAI) hoặc **Ollama** đang chạy:
    ```bash
    ollama ps
    ```
- **Lỗi CORS**:
  - Cập nhật `CORS_ORIGINS` và `IFRAME_ORIGINS` trong `.env` với tên miền chính xác.

## Kết luận
**Flowise AI** là một nền tảng mạnh mẽ để xây dựng các ứng dụng AI với giao diện **drag-and-drop**, phù hợp cho cả prototyping và **production**. Với triển khai **Docker Compose**, bạn có thể dễ dàng thiết lập một hệ thống **on-premise** an toàn, tích hợp **PostgreSQL** và **SSL**. Hướng dẫn này cung cấp các bước chi tiết để bắt đầu, từ cài đặt môi trường đến tạo **chatflow** đầu tiên.

Hãy khám phá Flowise AI để tạo ra các **AI workflows** và **agents** mạnh mẽ, đáp ứng nhu cầu thực tế của bạn!

Chúc bạn triển khai thành công!