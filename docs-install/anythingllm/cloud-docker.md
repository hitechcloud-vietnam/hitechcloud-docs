# Chạy AnythingLLM trên đám mây bằng Docker {#run-anythingllm-on-cloud-using-docker}

Chạy AnythingLLM trên dịch vụ đám mây là cách tốt nhất để vận hành một phiên bản AnythingLLM riêng, nhiều người dùng, kiểm soát đầy đủ mà không phải lo về hạ tầng bên dưới.

## Triển khai đám mây dễ dàng {#easy-cloud-deployment}

AnythingLLM cung cấp các mẫu triển khai Docker một cú nhấp chuột, dễ tích hợp với Railway và Render.

Đây là cách dễ nhất để tự lưu trữ (self-host) phiên bản AnythingLLM trên máy chủ đám mây.

### Kích thước instance tối thiểu theo nhà cung cấp {#provider-minimum-instance-size}

| Nhà cung cấp            | Kích thước instance tối thiểu |
|-------------------------|-----------------------|
| Amazon Web Services     | t3.small             |
| Google Cloud Provider   | e2-standard-2        |
| Azure Cloud             | B2ps v2              |

AnythingLLM cung cấp các mẫu triển khai do cộng đồng duy trì cho các nhà cung cấp đám mây: [Kho GitHub](https://github.com/Mintplex-Labs/anything-llm/tree/master/cloud-deployments).

## Các bước triển khai {#deployment-steps}

Khi đã sẵn sàng chạy AnythingLLM trên máy chủ, quy trình khá đơn giản.

Bạn nên tạo một thư mục trên máy chủ để có thể pull lại các phiên bản AnythingLLM mới nhất và giữ dữ liệu khi dựng lại container.

### Lệnh triển khai {#deployment-command}

```bash
# Assuming that you want to store app data in a folder at /var/lib/anythingllm

# Pull in the latest image
docker pull mintplexlabs/anythingllm:master

export STORAGE_LOCATION="/var/lib/anythingllm" && \
mkdir -p $STORAGE_LOCATION && \
touch "$STORAGE_LOCATION/.env" && \
docker run -d -p 3001:3001 \ # expose on port 3001 (can be any host port)
--cap-add SYS_ADMIN \
-v ${STORAGE_LOCATION}:/app/server/storage \
-v ${STORAGE_LOCATION}/.env:/app/server/.env \
-e STORAGE_DIR="/app/server/storage" \
mintplexlabs/anythingllm:master

# Visit http://localhost:3001 to use AnythingLLM!
```

Xong! Bạn đang dùng AnythingLLM!

## Thông tin thêm {#more-information}

### Tương thích ngược {#backwards-compatibility}

Nhóm Mintplex Labs rất chú trọng bảo đảm AnythingLLM luôn tương thích ngược. Nếu điều này thay đổi, bạn sẽ được thông báo qua mã nguồn, quá trình triển khai hoặc các kênh liên lạc thường xuyên trên mạng xã hội, Discord và email.

### Mở rộng quy mô {#scaling}

Vì backend của AnythingLLM dùng SQLite làm cơ sở dữ liệu, không nên mở rộng backend theo chiều ngang, vì khi đó nhiều container sẽ cùng đọc và ghi vào một cơ sở dữ liệu.

Trong trường hợp này, nên dùng cơ sở dữ liệu mạnh hơn như PostgreSQL cùng image PostgreSQL của AnythingLLM; image này tập trung cơ sở dữ liệu và đặt PGVector làm cơ sở dữ liệu vector.

### Hỗ trợ SSL/HTTPS {#sslhttps-support}

Để dùng SSL/HTTPS với AnythingLLM, nên dùng reverse proxy như NGINX cùng chứng chỉ TLS lấy từ Let's Encrypt.

#### Cấu hình NGINX {#nginx-configuration}

Dưới đây là ví dụ cấu hình NGINX để reverse proxy tới AnythingLLM:

```nginx
# Default server configuration
# Example config for regular setup + SSL + Websockets.
server {
	listen 80;
	server_name your-domain.com;
	return 301 https://your-domain.com$request_uri;
}
 
server {
	listen 443 ssl;
	ssl on;
	server_name your-domain.com;
	ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
	ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem; 
 
  # Enable websocket connections for agent protocol.
	location ~* ^/api/agent-invocation/(.*) {
		proxy_pass http://localhost:3001;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "Upgrade";
	}
 
	# Enable a custom 502 error page.
	# Must define template at /usr/share/nginx/html/502.html
	# error_page 502 /502.html;
    # location /502.html {
    #   index 502.html;
    # }
 
	location / {
		proxy_connect_timeout       605;
    proxy_send_timeout          605;
    proxy_read_timeout          605;
    send_timeout                605;
    keepalive_timeout           605;
    proxy_buffering off;
    proxy_cache off;
    proxy_pass         http://your-server-ip:3001$request_uri;
  }
}
```