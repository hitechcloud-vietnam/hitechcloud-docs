# KeyHelp - Tóm tắt và Hướng dẫn cài đặt

## Tóm tắt về KeyHelp

KeyHelp là một bảng điều khiển quản lý máy chủ web Linux (hỗ trợ Ubuntu LTS và Debian) miễn phí, trực quan, và mạnh mẽ, giúp đơn giản hóa việc quản lý server mà không yêu cầu kiến thức kỹ thuật sâu. Với hiệu suất ổn định, KeyHelp hỗ trợ số lượng miền không giới hạn và tích hợp API để tự động hóa quy trình CNTT. Sau khi cài đặt, KeyHelp sử dụng khoảng **600MB RAM**, tương đối nặng nhưng đáng giá nhờ tính ổn định và đa dạng tính năng.

### Các tính năng chính
- **Quản lý email**: Tạo và quản lý email dễ dàng.
- **Quản lý domain DNS**: Hỗ trợ thêm domain, subdomain, và tùy chỉnh DNS.
- **Giao diện người dùng**: Trực quan, thân thiện, hỗ trợ cả desktop và mobile.
- **Quản lý cơ sở dữ liệu**: Hỗ trợ quản lý và truy cập từ xa.
- **Quản lý tệp**: Trình quản lý tệp tích hợp với editor, xem ảnh, giải nén, v.v.
- **Quản lý Cronjob**: Lên lịch chạy lệnh và script tự động.
- **Quản lý FTP**: Tạo và quản lý tài khoản FTP với quyền tùy chỉnh.
- **Công cụ trực tuyến**: Hỗ trợ quản lý qua web.
- **Thống kê**: Theo dõi hiệu suất và tài nguyên server.
- **Quản lý SSL/TLS**: Tích hợp Let’s Encrypt để bật HTTPS.
- **Bảo vệ thư mục**: Ngăn truy cập trái phép.
- **Quét và diệt mã độc**: Bảo vệ server thời gian thực.
- **Quản lý người dùng**: Phù hợp cho việc chia VPS bán hosting lẻ.
- **Backup rclone**: Sao lưu dữ liệu an toàn.
- **Webserver**: Apache.
- **PHP MultiPHP**: Hỗ trợ nhiều phiên bản PHP.

### Các dịch vụ được cài đặt
KeyHelp tự động cài đặt và cấu hình các dịch vụ cần thiết như Apache, PHP, email server, FTP, và các công cụ bảo mật như Fail2Ban.

## Yêu cầu cài đặt
- **Hệ điều hành**: Ubuntu LTS hoặc Debian (64-bit).
- **Bộ nhớ**: Tối thiểu 1GB RAM (khuyến nghị 4GB cho hiệu suất tốt).
- **Hệ thống sạch**: VPS không có phần mềm hoặc cấu hình trước đó.
- **Quyền truy cập**: Người dùng root qua SSH.
- **Kết nối internet**: Ổn định để tải gói cài đặt.

## Hướng dẫn cài đặt
1. **Đăng nhập VPS qua SSH**:
   ```bash
   ssh root@server-ip
   ```

2. **Cập nhật hệ thống** (khuyến nghị):
   ```bash
   apt update && apt upgrade -y
   ```

3. **Cài đặt KeyHelp**:
   - Chạy lệnh sau để tải và thực thi script cài đặt:
     ```bash
     wget --no-check-certificate https://install.keyhelp.de/get_keyhelp.php -O install_keyhelp.sh ; bash install_keyhelp.sh ;
     ```
   - Script sẽ tự động cài đặt các dịch vụ cần thiết và hướng dẫn bạn qua các bước cấu hình.

4. **Xử lý lỗi chứng chỉ (nếu có)**:
   - Nếu gặp lỗi: “ERROR: The certificate of ‘install.keyhelp.de’ is not trusted.”:
     ```bash
     apt-get install ca-certificates
     ```
   - Sau đó chạy lại lệnh cài đặt.

5. **Truy cập KeyHelp**:
   - Sau khi cài đặt, truy cập giao diện tại: `https://<server-ip>/`.
   - Thông tin đăng nhập (admin và database) được lưu trong file `/root/keyhelp_login_data_*`.
   - Đổi mật khẩu admin ngay sau khi đăng nhập.

6. **Cấu hình ban đầu**:
   - **Ngôn ngữ**: Chọn ngôn ngữ (ví dụ: `DE` cho tiếng Đức hoặc để mặc định).
   - **Hostname**: Cấu hình hostname dạng FQDN (ví dụ: `server.yourdomain.com`).
   - **SSL**: Kích hoạt Let’s Encrypt qua menu **Security -> SSL/TLS Certificates**.
   - **Sao lưu**: Thiết lập backup trong **Settings -> Backups**.

## Lưu ý
- **Hệ thống sạch**: KeyHelp yêu cầu cài đặt trên VPS không có phần mềm hoặc cấu hình trước để tránh xung đột.
- **Không có uninstaller**: Để gỡ KeyHelp, cần reset server thủ công.
- **Bảo mật**: Đổi mật khẩu admin, bật 2FA, và cập nhật KeyHelp thường xuyên.
- **Hỗ trợ**: Tham khảo diễn đàn KeyHelp hoặc tài liệu chính thức tại [keyhelp.de](https://www.keyhelp.de) nếu gặp vấn đề.[](https://www.keyweb.de/en/keyhelp/keyhelp/)

## Kết luận
KeyHelp là một giải pháp quản lý server miễn phí, mạnh mẽ, và dễ sử dụng, phù hợp cho cả cá nhân và doanh nghiệp muốn quản lý hosting, email, và database trên Linux. Với các tính năng đa dạng và khả năng tự động hóa, KeyHelp giúp tiết kiệm thời gian và đảm bảo hiệu suất ổn định.

Chúc bạn cài đặt và sử dụng thành công!