# Hướng dẫn cài đặt

Hướng dẫn này cung cấp các bước cài đặt OLSPanel trên máy chủ với các yêu cầu tối thiểu và lệnh cài đặt chi tiết.

## Yêu cầu tối thiểu
Trước khi cài đặt OLSPanel, hãy đảm bảo máy chủ của bạn đáp ứng các yêu cầu sau để đạt hiệu suất và khả năng tương thích tối ưu:

### Hệ điều hành
- Ubuntu 20, 22 hoặc 24
- Debian 11 hoặc 12
- AlmaLinux 8 hoặc 9
- CentOS Stream 8 hoặc 9

### Quyền truy cập
- Đảm bảo bạn có **quyền truy cập root** vào máy chủ.

## Lệnh cài đặt
Các bước cài đặt sau áp dụng cho tất cả các hệ điều hành được hỗ trợ.

### 1. Cập nhật các gói hệ thống (Tùy chọn)
Cập nhật hệ thống và cài đặt các gói cần thiết:

#### Đối với Debian / Ubuntu
```bash
apt update && apt -y upgrade && apt -y install curl wget sudo
```

#### Đối với AlmaLinux / Rocky / CentOS
```bash
dnf -y update && dnf -y install curl wget
```

### 2. Cài đặt OLSPanel
Chạy lệnh sau để tải và thực thi script cài đặt OLSPanel:

```bash
bash <(curl -fsSL https://olspanel.com/install.sh || wget -qO- https://olspanel.com/install.sh)
```

### Lưu ý sau cài đặt
- Sau khi cài đặt hoàn tất, bạn sẽ nhận được thông tin đăng nhập bao gồm:
  - **URL truy cập**: `https://your-server-ip:port`
  - **Tên người dùng**: `admin`
  - **Mật khẩu**: `**********` (mật khẩu được tạo tự động)
- **Bỏ qua cảnh báo chứng chỉ tự ký** khi truy cập lần đầu.
- **Tạo ngay một người dùng quản trị** để ngăn chặn truy cập trái phép.

Chúc bạn cài đặt thành công!