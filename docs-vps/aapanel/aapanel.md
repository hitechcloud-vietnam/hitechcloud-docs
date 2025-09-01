# AaPanel 7.0.22 Free Edition trên Ubuntu 22.04

aaPanel là một bảng điều khiển web hosting miễn phí, mạnh mẽ và dễ sử dụng, đã được triển khai trên hơn 12 triệu máy chủ trên toàn thế giới. Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn cách cài đặt phiên bản miễn phí của aaPanel 7.0.22 trên Ubuntu 22.04 một cách chi tiết, đảm bảo bạn có thể thiết lập nhanh chóng và hiệu quả.

## Yêu Cầu Hệ Thống
Trước khi bắt đầu, hãy đảm bảo hệ thống của bạn đáp ứng các yêu cầu sau:
- **Hệ điều hành**: Ubuntu 22.04 LTS (khuyến nghị sử dụng hệ thống sạch, không cài đặt sẵn Apache/Nginx/PHP/MySQL).
- **Phần cứng tối thiểu**:
  - CPU: 1 lõi
  - RAM: 512MB (khuyến nghị 1GB+)
  - Dung lượng lưu trữ: 1GB (khuyến nghị 10GB+ để lưu trữ dữ liệu và dịch vụ).
- **Quyền truy cập**: Quyền root hoặc sudo.
- **Kết nối internet**: Cần thiết để tải xuống các gói cài đặt.

## Các Bước Cài Đặt aaPanel Free Edition

### Bước 1: Cập Nhật Hệ Thống
Trước khi cài đặt, hãy cập nhật các gói hệ thống để đảm bảo tính tương thích và bảo mật:
```bash
sudo apt update -y && sudo apt upgrade -y
```

### Bước 2: Cài Đặt Công Cụ Cần Thiết
Cài đặt `wget` để tải xuống tập lệnh cài đặt aaPanel:
```bash
sudo apt install wget -y
```

### Bước 3: Tải Xuống và Chạy Tập Lệnh Cài Đặt aaPanel Free Edition
Sử dụng tập lệnh chính thức để cài đặt aaPanel phiên bản miễn phí:
```bash
URL=https://www.aapanel.com/script/install_7.0_en.sh && if [ -f /usr/bin/curl ];then curl -ksSO "$URL" ;else wget --no-check-certificate -O install_7.0_en.sh "$URL";fi;bash install_7.0_en.sh aapanel
```

Trong quá trình cài đặt, bạn sẽ được yêu cầu xác nhận việc cài đặt aaPanel vào thư mục `/www`. Nhập `y` và nhấn Enter để tiếp tục. Quá trình này mất khoảng 2 phút.

**Lưu ý**: Nếu bạn không sử dụng quyền root, bạn sẽ cần chạy tập lệnh với `sudo` hoặc chuyển sang người dùng root bằng lệnh:
```bash
sudo -i
```

### Bước 4: Lưu Thông Tin Đăng Nhập
Sau khi cài đặt hoàn tất, bạn sẽ nhận được thông tin sau:
- **URL truy cập aaPanel**: Ví dụ, `https://YOUR_SERVER_IP:31750/abcdefg`
- **Tên người dùng**: Ví dụ, `abcdefgh`
- **Mật khẩu**: Ví dụ, `abcdefgh`

Hãy lưu thông tin này vào nơi an toàn. Nếu bạn quên, bạn có thể xem lại thông tin đăng nhập bằng lệnh:
```bash
bt default
```

Để thay đổi mật khẩu bảng điều khiển, sử dụng:
```bash
cd /www/server/panel && python tools.py panel NEW_PASSWORD
```

### Bước 5: Truy Cập Giao Diện Web aaPanel
Mở trình duyệt web và nhập URL được cung cấp (ví dụ: `https://YOUR_SERVER_IP:31750/abcdefg`). Đăng nhập bằng tên người dùng và mật khẩu được cung cấp.

**Lưu ý**: Nếu bạn không thể truy cập bảng điều khiển, hãy kiểm tra nhóm bảo mật của máy chủ (ví dụ: Google Cloud, AWS) và đảm bảo các cổng `31750`, `888`, `80`, `443`, `20`, `21` được mở.

### Bước 6: Cấu Hình Ban Đầu
Sau khi đăng nhập, aaPanel sẽ hiển thị một cửa sổ bật lên gợi ý cài đặt các gói phần mềm cần thiết (LNMP hoặc LAMP). Khuyến nghị chọn **LNMP (Nginx, MySQL, PHP)** vì nó nhẹ và nhanh hơn. Chọn các gói bạn cần (ví dụ: Nginx, MySQL, PHPMyAdmin) và nhấp vào **One-click Install** để cài đặt.

### Bước 7: Bảo Mật Bảng Điều Khiển
Để tăng cường bảo mật cho aaPanel, hãy thực hiện các bước sau:
- **Kích hoạt SSL**: Vào cài đặt aaPanel để bật SSL, đảm bảo dữ liệu được mã hóa.
- **Thay đổi thông tin đăng nhập mặc định**:
  ```bash
  cd /www/server/panel && python tools.py panel NEW_PASSWORD
  ```
- **Thay đổi cổng mặc định** (ví dụ: từ 31750 sang 8881):
  ```bash
  echo '8881' > /www/server/panel/data/port.pl && service bt restart
  sudo ufw allow 8881/tcp
  sudo ufw reload
  ```
- **Bật xác thực hai yếu tố** (nếu có): Kích hoạt trong cài đặt bảo mật của aaPanel.
- **Hạn chế truy cập IP**:
  Chỉ cho phép các IP cụ thể truy cập bảng điều khiển:
  ```bash
  echo "ALLOWED_IP" > /www/server/panel/data/limitip.conf
  ```

### Bước 8: Quản Lý aaPanel
Dưới đây là một số lệnh quản lý hữu ích:
- **Khởi động lại aaPanel**:
  ```bash
  service bt restart
  ```
- **Dừng aaPanel**:
  ```bash
  service bt stop
  ```
- **Xem cổng hiện tại**:
  ```bash
  cat /www/server/panel/data/port.pl
  ```
- **Gỡ cài đặt aaPanel**:
  ```bash
  service bt stop && update-rc.d -f bt remove && rm -f /etc/init.d/bt && rm -rf /www/server/panel
  ```

## Cấu Hình Các Dịch Vụ
aaPanel hỗ trợ quản lý nhiều dịch vụ như Nginx, Apache, MySQL, PHP, FTP, Redis, và Memcached. Dưới đây là các thư mục và lệnh chính:

- **Nginx**:
  - Thư mục cài đặt: `/www/server/nginx`
  - Tệp cấu hình: `/www/server/nginx/conf/nginx.conf`
  - Khởi động: `service nginx start`
  - Dừng: `service nginx stop`
  - Khởi động lại: `service nginx restart`

- **MySQL**:
  - Thư mục cài đặt: `/www/server/mysql`
  - Tệp cấu hình: `/etc/my.cnf`
  - Khởi động: `service mysqld start`
  - Thay đổi mật khẩu root MySQL:
    ```bash
    cd /www/server/panel && python tools.py root NEW_PASSWORD
    ```

- **PHP**:
  - Thư mục cài đặt: `/www/server/php`
  - Khởi động (ví dụ, PHP 8.1): `service php-fpm-81 start`
  - Tệp cấu hình (ví dụ, PHP 8.1): `/www/server/php/81/etc/php.ini`

- **Thư mục chính**:
  - Website: `/www/wwwroot`
  - Sao lưu cơ sở dữ liệu: `/www/backup/database`
  - Sao lưu website: `/www/backup/site`
  - Nhật ký: `/www/wwwlogs`

## Mẹo và Lưu Ý
- **Sao lưu thường xuyên**: Sử dụng tính năng cron của aaPanel để tự động sao lưu cơ sở dữ liệu và tệp.
- **Cập nhật aaPanel**: Kiểm tra nút cập nhật trên giao diện hoặc chạy:
  ```bash
  curl -sSL https://www.aapanel.com/script/update_en.sh | sudo bash
  ```
- **Khắc phục sự cố**: Xem nhật ký lỗi tại `/tmp/panelBoot` hoặc `/www/server/data/*.err`.
- **Tài liệu chính thức**: Tham khảo [trang web aaPanel](https://www.aapanel.com) để biết thêm chi tiết và hướng dẫn.

## Kết Luận
Việc cài đặt aaPanel 7.0.22 Free Edition trên Ubuntu 22.04 là một quá trình đơn giản, nhanh chóng và mang lại bảng điều khiển mạnh mẽ để quản lý máy chủ web. Với giao diện thân thiện và hỗ trợ nhiều dịch vụ, aaPanel là một lựa chọn tuyệt vời thay thế cho các bảng điều khiển trả phí như cPanel. Hãy bắt đầu quản lý máy chủ của bạn một cách dễ dàng và hiệu quả ngay hôm nay!