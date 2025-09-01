# Cài đặt Odoo 18

Odoo là bộ ứng dụng kinh doanh mã nguồn mở đáp ứng các nhu cầu như CRM, thương mại điện tử, kế toán, tồn kho, điểm bán hàng, quản lý dự án, v.v. Để tìm hiểu thêm, truy cập [odoo.com](https://odoo.com). Dưới đây là hướng dẫn cài đặt Odoo trên VPS chạy hệ điều hành Debian 12 hoặc Ubuntu 22.04.

## Yêu cầu
Để cài đặt Odoo, bạn cần chuẩn bị VPS với cấu hình tối thiểu:

| **Tiêu chí**         | **Dưới 10 người dùng**        | **Trên 50 người dùng**         |
|-----------------------|-------------------------------|---------------------------------|
| **CPU**              | Dual-core CPU                | Quad-core hoặc cao hơn         |
| **RAM**              | 2 GB trở lên                 | 16 GB trở lên                  |
| **Lưu trữ**          | 10 GB trở lên                | 50 GB trở lên (tùy vào dữ liệu) |
| **Mạng**             | Kết nối internet ổn định     | Kết nối internet ổn định       |

## Hệ điều hành
- Debian 12
- Ubuntu 22.04

## Cài đặt

### 1. Cài đặt PostgreSQL
Odoo sử dụng PostgreSQL làm cơ sở dữ liệu mặc định. Cài đặt PostgreSQL bằng lệnh:

```bash
sudo apt install postgresql -y
```

### 2. Cài đặt các thư viện cần thiết
Cài đặt các thư viện phụ thuộc để đảm bảo Odoo hoạt động trơn tru:

```bash
apt -y install build-essential wget git python3-pip python3-dev python3-venv \
python3-wheel libfreetype6-dev libxml2-dev libzip-dev libsasl2-dev \
python3-setuptools node-less libjpeg-dev zlib1g-dev libpq-dev \
libxslt1-dev libldap2-dev libtiff5-dev libopenjp2-7-dev
```

### 3. Cài đặt Odoo từ package
Odoo cung cấp kho lưu trữ chính thức để cài đặt phiên bản Community. Thực hiện các lệnh sau:

```bash
wget -q -O - https://nightly.odoo.com/odoo.key | sudo gpg --dearmor -o /usr/share/keyrings/odoo-archive-keyring.gpg
echo 'deb [signed-by=/usr/share/keyrings/odoo-archive-keyring.gpg] https://nightly.odoo.com/18.0/nightly/deb/ ./' | sudo tee /etc/apt/sources.list.d/odoo.list
sudo apt-get update && sudo apt-get install odoo
```

### 4. Khởi chạy Odoo
Khởi động và cấu hình Odoo để chạy cùng hệ thống:

```bash
systemctl daemon-reload
systemctl start odoo
systemctl status odoo
systemctl enable odoo
```

### 5. Cấu hình Odoo trên web
Sau khi cài đặt qua SSH, truy cập giao diện web để cấu hình lần đầu:

1. Mở trình duyệt và truy cập: `http://<IP>:8069`
2. Điền các thông số sau:
   - **Master Password**: Mật khẩu quản trị cao nhất (sử dụng mật khẩu ngẫu nhiên được cung cấp).
   - **Database name**: Tên cơ sở dữ liệu cho Odoo.
   - **Email**: Email tài khoản admin.
   - **Password**: Mật khẩu tài khoản admin.
   - **Phone number**: Số điện thoại admin.
   - **Language**: Ngôn ngữ sử dụng (khuyên dùng tiếng Anh do tài liệu chủ yếu bằng tiếng Anh).
   - **Country**: Quốc gia.
   - **Demo data**: Tích chọn để cài dữ liệu mẫu (tùy chọn).

3. Nhấn **Create Database** và chờ quá trình hoàn tất.

### 6. Đăng nhập
Sử dụng **Email** và **Mật khẩu** đã cấu hình để đăng nhập và bắt đầu sử dụng Odoo.

Chúc bạn cài đặt thành công!