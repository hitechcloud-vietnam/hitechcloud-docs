# Các image khả dụng {#available-images}

## latest {#latest}

- **Kiến trúc:** amd64 & arm64
- **Tần suất phát hành:** mỗi commit lên nhánh master
- **Lệnh pull:** `docker pull mintplexlabs/anythingllm:latest`

Image latest là phiên bản mới nhất của AnythingLLM. Image được cập nhật gần như hằng ngày và luôn có các tính năng và bản sửa lỗi mới nhất đã được commit vào nhánh master của kho GitHub AnythingLLM.

## v*.*.* {#v}

- **Kiến trúc:** amd64 & arm64
- **Tần suất phát hành:** khi có bản phát hành mới
- **Lệnh pull:** `docker pull mintplexlabs/anythingllm:v*.*.*`

Các image v*.*.* là các bản phát hành có phiên bản cố định của AnythingLLM. Các image này được đăng khi có bản phát hành mới; bạn có thể xem bản phát hành mới nhất [tại đây](https://github.com/mintplexlabs/anythingllm/releases).

## render hoặc railway {#render-or-railway}

**Cảnh báo:** chỉ chỉ định image này khi bạn triển khai AnythingLLM qua Render hoặc Railway.

- **Kiến trúc:** amd64
- **Tần suất phát hành:** khi có bản phát hành mới
- **Lệnh pull:** `docker pull mintplexlabs/anythingllm:render`

Các image render hoặc railway là phiên bản mới nhất của AnythingLLM và đồng bộ với các bản phát hành có phiên bản của AnythingLLM.

## pg {#pg}

- **Kiến trúc:** amd64 & arm64
- **Tần suất phát hành:** khi có bản phát hành mới
- **Lệnh pull:** `docker pull mintplexlabs/anythingllm:pg`

Image pg là phiên bản mới nhất của AnythingLLM được build riêng để dùng với cơ sở dữ liệu PostgreSQL cục bộ hoặc từ xa.

Image này có lệnh khởi động hơi khác để hỗ trợ triển khai PostgreSQL và thực hiện như sau:

- Lưu toàn bộ dữ liệu AnythingLLM trong cơ sở dữ liệu PostgreSQL
- Mặc định dùng PGVector để lưu vector - yêu cầu cài phần mở rộng PGVector trên cơ sở dữ liệu PostgreSQL

Xem lệnh triển khai image PostgreSQL để biết thêm thông tin.