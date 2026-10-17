# Hướng dẫn nhanh cho AnythingLLM chạy bằng Docker {#quickstart-guide-for-dockerized-anythingllm}

## Khởi động AnythingLLM bằng Docker {#start-anythingllm-via-docker}

### Linux/MacOS {#linuxmacos}

```bash
export STORAGE_LOCATION=$HOME/anythingllm && \
mkdir -p $STORAGE_LOCATION && \
touch "$STORAGE_LOCATION/.env" && \
docker run -d -p 3001:3001 \
--cap-add SYS_ADMIN \
-v ${STORAGE_LOCATION}:/app/server/storage \
-v ${STORAGE_LOCATION}/.env:/app/server/.env \
-e STORAGE_DIR="/app/server/storage" \
mintplexlabs/anythingllm:latest
```

Truy cập [http://localhost:3001](http://localhost:3001) và bạn đã dùng được AnythingLLM! Toàn bộ dữ liệu và tiến trình của bạn được giữ lại khi dựng lại container hoặc pull lại từ Docker Hub.

### Windows {#windows}

```powershell
$env:STORAGE_LOCATION="$HOME\Documents\anythingllm"; `
If(!(Test-Path $env:STORAGE_LOCATION)) {New-Item $env:STORAGE_LOCATION -ItemType Directory}; `
If(!(Test-Path "$env:STORAGE_LOCATION\.env")) {New-Item "$env:STORAGE_LOCATION\.env" -ItemType File}; `
docker run -d -p 3001:3001 `
--cap-add SYS_ADMIN `
-v "$env:STORAGE_LOCATION:/app/server/storage" `
-v "$env:STORAGE_LOCATION\.env:/app/server/.env" `
-e STORAGE_DIR="/app/server/storage" `
mintplexlabs/anythingllm:latest;
```

Truy cập [http://localhost:3001](http://localhost:3001) và bạn đã dùng được AnythingLLM! Toàn bộ dữ liệu và tiến trình của bạn được giữ lại khi dựng lại container hoặc pull lại từ Docker Hub.

## Cách dùng giao diện {#how-to-use-the-user-interface}

Để truy cập toàn bộ ứng dụng, hãy mở [http://localhost:3001](http://localhost:3001) trong trình duyệt.

## Về UID và GID trong ENV {#about-uid-and-gid-in-the-env}

UID và GID mặc định là 1000. Đây là người dùng mặc định trong container Docker và trên hầu hết hệ điều hành máy chủ.

Nếu UID và GID của người dùng trên máy chủ không khớp với giá trị đặt trong tệp `.env`, bạn có thể gặp lỗi phân quyền.

## Lệnh khởi động image pg {#pg-image-startup-command}

Image `pg` có lệnh khởi động hơi khác để hỗ trợ kết nối cơ sở dữ liệu PostgreSQL.

Trước hết, hãy bảo đảm bạn có cơ sở dữ liệu PostgreSQL đang chạy và đã cài phần mở rộng PGVector trên cơ sở dữ liệu đó.

### Linux/MacOS {#linuxmacos-1}

```bash
export STORAGE_LOCATION=$HOME/anythingllm && \
mkdir -p $STORAGE_LOCATION && \
touch "$STORAGE_LOCATION/.env" && \
docker run -d -p 3001:3001 \
--cap-add SYS_ADMIN \
-v ${STORAGE_LOCATION}:/app/server/storage \
-v ${STORAGE_LOCATION}/.env:/app/server/.env \
-e STORAGE_DIR="/app/server/storage" \
-e DATABASE_URL="postgresql://dbuser:dbpassword@host.docker.internal:5432/dbname" \
mintplexlabs/anythingllm:pg
```

### Windows {#windows-1}

```powershell
$env:STORAGE_LOCATION="$HOME\Documents\anythingllm"; `
If(!(Test-Path $env:STORAGE_LOCATION)) {New-Item $env:STORAGE_LOCATION -ItemType Directory}; `
If(!(Test-Path "$env:STORAGE_LOCATION\.env")) {New-Item "$env:STORAGE_LOCATION\.env" -ItemType File}; `
docker run -d -p 3001:3001 `
--cap-add SYS_ADMIN `
-v "$env:STORAGE_LOCATION:/app/server/storage" `
-v "$env:STORAGE_LOCATION\.env:/app/server/.env" `
-e STORAGE_DIR="/app/server/storage" `
-e DATABASE_URL="postgresql://dbuser:dbpassword@host.docker.internal:5432/dbname" `
mintplexlabs/anythingllm:pg;
```

## Cập nhật lần cuối {#last-updated}

Hướng dẫn này được cập nhật lần cuối vào ngày **17 tháng 7 năm 2025**.