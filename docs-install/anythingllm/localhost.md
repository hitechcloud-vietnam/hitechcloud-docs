# Kết nối tới các dịch vụ localhost trong AnythingLLM chạy bằng Docker {#connecting-to-localhost-services-in-dockerized-anythingllm}

Các hướng dẫn dưới đây giả định bạn chạy AnythingLLM bằng lệnh khởi động chính thức.

## Dùng dịch vụ localhost bất kỳ khi chạy AnythingLLM trong Docker {#using-any-localhost-service-when-running-anythingllm-in-docker}

Khi chạy AnythingLLM trong Docker, bạn có thể cần kết nối tới một dịch vụ đang chạy trên localhost. Đó có thể là:

- Cơ sở dữ liệu PostgreSQL
- Nhà cung cấp LLM, Embedding hoặc cơ sở dữ liệu vector (LMStudio, Ollama, Chroma, v.v.)
- Bất kỳ dịch vụ nào khác chạy trên cùng máy, mà bạn dùng localhost, 127.0.0.1 hoặc 0.0.0.0 để kết nối với AnythingLLM

### localhost, 127.0.0.1, 0.0.0.0 sẽ không hoạt động! {#localhost-127001-0000-will-not-work}

Khi chạy AnythingLLM trong Docker, các địa chỉ localhost, 127.0.0.1 hoặc 0.0.0.0 không tồn tại bên trong container!

Nghĩa là khi bạn dùng localhost, 127.0.0.1 hoặc 0.0.0.0 trong bất kỳ cấu hình kết nối nào, chúng sẽ không hoạt động như mong đợi vì các kết nối này không bao giờ ra khỏi container AnythingLLM.

## Cách kết nối tới dịch vụ chạy trên localhost {#how-to-connect-to-a-service-running-on-localhost}

Nếu cần kết nối tới dịch vụ chạy trên localhost, hoặc thậm chí dịch vụ chạy trong một container Docker khác, chỉ cần sửa mọi nơi đang dùng localhost, 127.0.0.1 hoặc 0.0.0.0 sang dùng địa chỉ `host.docker.internal`.

### Lưu ý về Linux {#note-about-linux}

Trên Linux, bạn phải dùng địa chỉ `172.17.0.1` thay cho `host.docker.internal` để kết nối tới máy chủ.

## Ví dụ {#examples}

### PostgreSQL {#postgresql}
```
postgresql://dbuser:dbpassword@localhost:5432/dbname => postgresql://dbuser:dbpassword@host.docker.internal:5432/dbname
```

### Ollama {#ollama}
```
http://localhost:11434 => http://host.docker.internal:11434
```

### Chroma {#chroma}
```
http://localhost:8000 => http://host.docker.internal:8000
```

### LMStudio {#lmstudio}
```
http://localhost:1234 => http://host.docker.internal:1234
```

## Gỡ lỗi chung {#general-debugging}

Nếu gặp sự cố với AnythingLLM, việc đầu tiên nên làm là kiểm tra log. Bạn có thể tìm log trong thư mục logs của container.

### Chế độ gỡ lỗi của AnythingLLM trên Docker {#anythingllm-debug-mode-on-docker}

- Mở Container Logs trong Docker Desktop
- In log bằng lệnh:
```bash
docker container <CONTAINER_ID> logs
```