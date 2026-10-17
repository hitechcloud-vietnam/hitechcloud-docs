# Tổng quan về cài đặt {#installation-overview}

AnythingLLM Docker vừa là ứng dụng một người dùng vừa là ứng dụng nhiều người dùng, bạn có thể cài trên bất kỳ máy chủ web nào bằng Docker và tận dụng LLM cục bộ, RAG và Agent với cấu hình rất ít hoặc không cần cấu hình, đồng thời bảo đảm quyền riêng tư.

Tự lưu trữ AnythingLLM bằng Docker rất phổ biến và có thể thực hiện cục bộ hoặc trên các dịch vụ đám mây (AWS, Google Cloud, Railway, v.v.).

## Docker so với bản Desktop {#docker-vs-desktop-version}

**Mẹo:** AnythingLLM Desktop là cách dễ nhất để bắt đầu với AnythingLLM.

Nếu không cần hỗ trợ nhiều người dùng, bạn nên dùng AnythingLLM Desktop.

Mỗi phiên bản có những khác biệt rõ rệt về chức năng. Cả hai đều là mã nguồn mở.

### Bạn cần AnythingLLM Docker nếu... {#you-want-anythingllm-docker-if}

- Bạn cần cách thiết lập dễ dàng nhưng là dịch vụ trên máy chủ để AnythingLLM dùng LLM cục bộ, RAG và Agent
- Bạn muốn chạy một phiên bản AnythingLLM mà nhiều người có thể dùng cùng lúc
- Bạn muốn chia sẻ thông tin với những người dùng mà bạn mời vào phiên bản của mình
- Bạn cần phân quyền quản trị và theo quy tắc cho workspace và tài liệu
- Bạn sẽ công khai các chat widget lên Internet
- Bạn muốn truy cập AnythingLLM từ trình duyệt

### Bạn cần AnythingLLM Desktop nếu... {#you-want-anythingllm-desktop-if}

- Bạn muốn một ứng dụng cài đặt bằng một cú nhấp chuột để dùng LLM cục bộ, RAG và Agent ngay trên máy
- Bạn không cần hỗ trợ nhiều người dùng
- Mọi thứ cần chỉ nằm trên thiết bị của bạn
- Bạn không cần "xuất bản" bất cứ thứ gì lên Internet (ví dụ: chat widget cho website)

## So sánh tính năng {#feature-comparison}

Bảng dưới đây liệt kê một số tính năng được hỗ trợ giữa các nền tảng (không đầy đủ).

| Tính năng                      | Có trên Desktop      | Có trên Docker      |
|--------------------------------|----------------------|---------------------|
| Hỗ trợ nhiều người dùng        | ❌                  | ✅                  |
| Chat widget có thể nhúng       | ❌                  | ✅                  |
| Cài đặt một cú nhấp chuột      | ✅                  | ❌                  |
| Tài liệu riêng tư              | ✅                  | ✅                  |
| Kết nối tới mọi cơ sở dữ liệu vector | ✅            | ✅                  |
| Dùng LLM bất kỳ                | ✅                  | ✅                  |
| Nhà cung cấp embedding tích hợp | ✅                 | ✅                  |
| Nhà cung cấp LLM tích hợp      | ✅                  | ❌                  |
| White-label (gắn thương hiệu riêng) | ❌             | ✅                  |
| Nhật ký chat                   | ✅                  | ✅                  |
| Hỗ trợ Agent                   | ✅                  | ✅                  |
| Kỹ năng của Agent              | ✅                  | ✅                  |
| Kết nối dữ liệu bên thứ ba     | ✅                  | ✅                  |
| Bảo vệ bằng mật khẩu           | ❌                  | ✅                  |
| Mời người dùng mới vào phiên bản | ❌                | ✅                  |
| Cấu hình tách văn bản          | ✅                  | ✅                  |
| Hỗ trợ mô hình Whisper         | ✅                  | ✅                  |
| API đầy đủ cho nhà phát triển  | ✅                  | ✅                  |
| Quản lý người dùng             | ❌                  | ✅                  |
| Quản lý quyền truy cập workspace | ❌                | ✅                  |
| Thu thập nội dung website      | ✅                  | ✅                  |