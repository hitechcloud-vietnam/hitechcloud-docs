# Điều chỉnh Repo Ubuntu
## Tối ưu hóa tốc độ cập nhật Ubuntu bằng cách điều chỉnh Server Repo

Việc điều chỉnh server repository (repo) trên Ubuntu giúp tăng tốc độ cập nhật và cài đặt ứng dụng, đặc biệt khi máy chủ đặt tại Việt Nam nhưng sử dụng repo quốc tế, gây chậm trễ do mạng không ổn định. Bài viết này hướng dẫn cách chuyển repo sang mirror tại Việt Nam để cải thiện hiệu suất.

## Tại sao cần điều chỉnh Repo?
Nếu VPS/server của bạn ở Việt Nam nhưng sử dụng repo quốc tế (như `archive.ubuntu.com`), việc tải gói tin sẽ chậm, đặc biệt khi mạng quốc tế gặp sự cố. Chuyển sang mirror trong nước (như `vn.archive.ubuntu.com`) giúp giảm độ trễ và tăng tốc độ tải.

## Hướng dẫn điều chỉnh Repo
Dưới đây là hai cách áp dụng cho các VPS/server cài Ubuntu thông thường và một cách cho Cloud Image (sử dụng cloud-init).

### 1. Cách 1: Sử dụng lệnh `sed` (Khuyến nghị)
Phương pháp này nhanh, tự động và ít xảy ra lỗi.

- **Sao lưu file cấu hình**:
  ```bash
  sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
  ```
  Lệnh này tạo bản sao lưu file `sources.list` để khôi phục nếu cần.

- **Thay thế Repo bằng mirror Việt Nam**:
  ```bash
  sudo sed -i 's|http://archive.ubuntu.com/ubuntu|http://vn.archive.ubuntu.com/ubuntu|g' /etc/apt/sources.list
  ```
  Lệnh này thay thế `http://archive.ubuntu.com/ubuntu` bằng `http://vn.archive.ubuntu.com/ubuntu` trong file `/etc/apt/sources.list`, giữ nguyên các dòng liên quan đến `security.ubuntu.com`.

- **Cập nhật danh sách gói tin**:
  ```bash
  sudo apt update
  ```

### 2. Cách 2: Chỉnh sửa thủ công
Phương pháp này phù hợp nếu bạn muốn kiểm soát chi tiết hơn.

- **Mở file cấu hình**:
  ```bash
  sudo nano /etc/apt/sources.list
  ```

- **Thay thế Repo**:
  - Tìm các dòng bắt đầu bằng `deb` hoặc `deb-src` chứa `archive.ubuntu.com`.
  - Thay thế bằng `vn.archive.ubuntu.com`.
  - **Lưu ý**: Không thay đổi các dòng chứa `security.ubuntu.com`.

- **Lưu và thoát**:
  - Nhấn `Ctrl + O` để lưu, `Ctrl + X` để thoát.

- **Cập nhật danh sách gói tin**:
  ```bash
  sudo apt update
  ```

### 3. Trường hợp đặc biệt: Cloud Image (sử dụng cloud-init)
Với các máy ảo Cloud Image, cấu hình repo được quản lý bởi cloud-init trong file YAML, thường nằm tại `/etc/cloud/cloud.cfg` hoặc `/etc/cloud/cloud.cfg.d/`.

- **Xác định file cấu hình**:
  Tìm file chứa mục `package_mirrors`, ví dụ:
  ```bash
  sudo nano /etc/cloud/cloud.cfg.d/90_dpkg.cfg
  ```

- **Chỉnh sửa file YAML**:
  Cập nhật khối `package_mirrors` để sử dụng mirror Việt Nam (`http://vn.archive.ubuntu.com/ubuntu`) cho mục `primary`, giữ nguyên `security`. Ví dụ cấu hình:

  ```yaml
  package_mirrors:
    - arches: [i386, amd64]
      failsafe:
        primary: http://vn.archive.ubuntu.com/ubuntu
        security: http://security.ubuntu.com/ubuntu
      search:
        primary:
          - http://vn.archive.ubuntu.com/ubuntu/
          - http://%(availability_zone)s.clouds.archive.ubuntu.com/ubuntu/
          - http://%(region)s.clouds.archive.ubuntu.com/ubuntu/
        security: []
    - arches: [arm64, armel, armhf]
      failsafe:
        primary: http://ports.ubuntu.com/ubuntu-ports
        security: http://ports.ubuntu.com/ubuntu-ports
      search:
        primary:
          - http://%(ec2_region)s.ec2.ports.ubuntu.com/ubuntu-ports/
          - http://%(availability_zone)s.clouds.ports.ubuntu.com/ubuntu-ports/
          - http://%(region)s.clouds.ports.ubuntu.com/ubuntu-ports/
        security: []
    - arches: [default]
      failsafe:
        primary: http://ports.ubuntu.com/ubuntu-ports
        security: http://ports.ubuntu.com/ubuntu-ports
  ```

  **Lưu ý**: Chỉ chỉnh sửa mục tương ứng với kiến trúc CPU của máy (thường là `amd64`).

- **Áp dụng thay đổi**:
  - Lưu file và khởi động lại máy ảo để cloud-init áp dụng cấu hình:
    ```bash
    sudo reboot
    ```
  - Hoặc chạy lại cloud-init (nếu được hỗ trợ):
    ```bash
    sudo cloud-init clean
    sudo cloud-init init
    ```

- **Cập nhật danh sách gói tin**:
  ```bash
  sudo apt update
  ```

## Kết quả
Sau khi thay đổi repo sang mirror Việt Nam, tốc độ tải gói tin sẽ cải thiện đáng kể, đặc biệt khi kết nối mạng quốc tế không ổn định.

## Lưu ý
- **Sao lưu trước khi chỉnh sửa**: Luôn sao lưu file cấu hình để tránh lỗi.
- **Kiểm tra mirror**: Đảm bảo mirror `vn.archive.ubuntu.com` hoạt động bằng cách truy cập qua trình duyệt.
- **Bảo mật**: Các dòng `security.ubuntu.com` phải được giữ nguyên để đảm bảo cập nhật bảo mật.

Chúc bạn tối ưu hóa thành công!