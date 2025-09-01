# FastPanel trên Máy Chủ Linux

FastPanel là một bảng điều khiển hosting miễn phí, mạnh mẽ và thân thiện với người dùng, giúp đơn giản hóa việc quản lý máy chủ Linux. Với giao diện đồ họa trực quan, FastPanel hỗ trợ quản lý website, email, cơ sở dữ liệu, và nhiều tính năng khác như FTP, SSL, và phân tích lưu lượng truy cập. Hướng dẫn này sẽ cung cấp các bước chi tiết để cài đặt FastPanel trên các hệ điều hành Linux phổ biến như Ubuntu, Debian, CentOS, AlmaLinux, và Rocky Linux.

## Yêu Cầu Hệ Thống
Trước khi bắt đầu, hãy đảm bảo máy chủ của bạn đáp ứng các yêu cầu tối thiểu sau:
- **Tài nguyên máy chủ**:
  - **RAM**: Tối thiểu 1GB (khuyến nghị 2GB trở lên để hoạt động tối ưu).
  - **Dung lượng trống**: Tối thiểu 5GB (khuyến nghị 20GB trở lên).
  - **CPU**: Tối thiểu 1 lõi, 1GHz (khuyến nghị 2 lõi trở lên).
- **Hệ điều hành** (chỉ hỗ trợ kiến trúc 64-bit):
  - Ubuntu: 18.04, 20.04, 22.04, 24.04
  - Debian: 9, 10, 11, 12
  - CentOS: 7
  - AlmaLinux: 8
  - Rocky Linux: 8
- **Yêu cầu bổ sung**:
  - Quyền truy cập root hoặc người dùng có quyền sudo.
  - Kết nối internet ổn định với địa chỉ IP tĩnh.
  - Hệ thống sạch, không cài đặt sẵn các phần mềm như Apache, Nginx, hoặc các bảng điều khiển khác để tránh xung đột.

**Lưu ý**: FastPanel chỉ có thể được cài đặt trên hệ điều hành sạch, không có phần mềm được cấu hình sẵn.

## Các Bước Cài Đặt FastPanel

### Bước 1: Truy Cập Máy Chủ qua SSH
1. Sử dụng công cụ SSH (như PuTTY trên Windows hoặc Terminal trên macOS/Linux) để đăng nhập vào máy chủ với quyền root:
   ```bash
   ssh root@your_server_ip
   ```
   Thay `your_server_ip` bằng địa chỉ IP của máy chủ.

2. Nếu bạn sử dụng người dùng không phải root, hãy chuyển sang quyền root bằng lệnh:
   ```bash
   sudo -i
   ```

### Bước 2: Cập Nhật Hệ Thống và Cài Đặt Wget
Cập nhật hệ thống và cài đặt `wget` để tải tập lệnh cài đặt FastPanel.

- **Đối với Ubuntu/Debian**:
  ```bash
  apt-get update
  apt-get install wget -y
  ```

- **Đối với CentOS/AlmaLinux/Rocky Linux**:
  ```bash
  yum makecache
  yum install wget -y
  ```

### Bước 3: Tải và Chạy Tập Lệnh Cài Đặt FastPanel
FastPanel sử dụng một tập lệnh duy nhất để tự động phát hiện hệ điều hành và cài đặt các thành phần cần thiết (MariaDB, Nginx, Apache, PHP, ProFTPD, Exim, Dovecot, phpMyAdmin, v.v.). Chạy lệnh sau:

```bash
wget http://repo.fastpanel.direct/install_fastpanel.sh -O - | bash -
```

Quá trình cài đặt sẽ mất vài phút, tùy thuộc vào hiệu suất máy chủ. Tập lệnh sẽ cài đặt tất cả các thành phần cần thiết và hiển thị tiến trình cài đặt.

### Bước 4: Lưu Thông Tin Đăng Nhập
Sau khi cài đặt hoàn tất, bạn sẽ nhận được thông tin đăng nhập như sau:
- **URL truy cập**: `https://your_server_ip:8888`
- **Tên người dùng**: `fastuser`
- **Mật khẩu**: Mật khẩu ngẫu nhiên được tạo (lưu ý sao chép và lưu trữ an toàn).

Ví dụ đầu ra:
```
Congratulations! FASTPANEL successfully installed and available for you at https://your_server_ip:8888
Login: fastuser
Password: your_generated_password
```

### Bước 5: Cấu Hình Tường Lửa
FastPanel sử dụng cổng 8888 theo mặc định. Đảm bảo cổng này được mở trong tường lửa của bạn.

- **Đối với Ubuntu/Debian (sử dụng UFW)**:
  ```bash
  sudo ufw allow 8888/tcp
  sudo ufw allow 22/tcp  # Đảm bảo SSH vẫn được phép
  sudo ufw enable
  sudo ufw status
  ```

- **Đối với CentOS/AlmaLinux/Rocky Linux (sử dụng firewalld)**:
  ```bash
  sudo firewall-cmd --permanent --add-port=8888/tcp
  sudo firewall-cmd --reload
  sudo firewall-cmd --list-all
  ```

Nếu bạn sử dụng máy chủ cloud (như AWS, Google Cloud), hãy kiểm tra và mở cổng 8888 trong nhóm bảo mật của nhà cung cấp.

### Bước 6: Truy Cập Giao Diện Web FastPanel
1. Mở trình duyệt và truy cập: `https://your_server_ip:8888`
   - Bạn có thể gặp cảnh báo về chứng chỉ SSL tự ký. Nhấp vào **Advanced** và **Proceed** để tiếp tục.

2. Tại giao diện đăng nhập, nhập:
   - **Tên người dùng**: `fastuser`
   - **Mật khẩu**: Mật khẩu được cung cấp sau khi cài đặt.

3. **Kích hoạt giấy phép**:
   - Lần đầu đăng nhập, FastPanel sẽ yêu cầu nhập địa chỉ email để nhận giấy phép miễn phí.
   - Nhập email, kiểm tra hộp thư đến (hoặc thư rác) để xác minh và hoàn tất kích hoạt.
   - Sau khi xác minh, quay lại giao diện FastPanel và nhấp vào **Check status** để hoàn tất.

4. Chấp nhận **Điều khoản sử dụng** và **Chính sách bảo mật** để vào bảng điều khiển.

### Bước 7: Bảo Mật và Tối Ưu Hóa
Để đảm bảo an toàn, hãy thực hiện các bước sau:
- **Thay đổi mật khẩu mặc định**:
  Sau khi đăng nhập, vào phần quản lý người dùng để thay đổi mật khẩu của `fastuser`.
- **Kích hoạt xác thực hai yếu tố (2FA)**:
  FastPanel hỗ trợ 2FA để tăng cường bảo mật.
- **Cập nhật thường xuyên**:
  Kiểm tra cập nhật FastPanel trong giao diện hoặc tham khảo trang web chính thức: [FastPanel Knowledge Base](https://kb.fastpanel.direct).[](https://kb.fastpanel.direct/quick_start/how-to-install-fastpanel/)
- **Sao lưu hệ thống**:
  Sử dụng tính năng sao lưu của FastPanel để bảo vệ dữ liệu website và cơ sở dữ liệu.

### Bước 8: Quản Lý FastPanel
FastPanel cung cấp giao diện quản lý đầy đủ tính năng, bao gồm:
- **Quản lý tên miền**: Thêm và cấu hình tên miền cho website.
- **Quản lý tệp**: Sử dụng trình quản lý tệp tích hợp để tải lên/xóa tệp.
- **Cơ sở dữ liệu**: Tạo và quản lý cơ sở dữ liệu MySQL/MariaDB.
- **Email**: Thiết lập tài khoản email với Exim và Dovecot.
- **SSL**: Cài đặt chứng chỉ SSL miễn phí từ Let’s Encrypt.
- **FTP/SFTP**: Quản lý tài khoản FTP với ProFTPD.
- **Thống kê**: Theo dõi hiệu suất máy chủ và lưu lượng truy cập.

## Mẹo và Khắc Phục Sự Cố
- **Lỗi tải tập lệnh cài đặt**:
  Nếu gặp lỗi khi tải `install_fastpanel.sh`, kiểm tra kết nối internet và đảm bảo `wget` đã được cài đặt:
  ```bash
  wget --version
  ```
- **Không truy cập được giao diện web**:
  - Kiểm tra trạng thái tường lửa bằng `ufw status` hoặc `firewall-cmd --list-all`.
  - Đảm bảo cổng 8888 được mở trong nhóm bảo mật của nhà cung cấp cloud.
- **Quên mật khẩu**:
  Sử dụng email đã đăng ký để khôi phục mật khẩu qua giao diện đăng nhập.
- **Cài đặt tùy chỉnh MySQL**:
  Nếu cần chọn phiên bản MySQL cụ thể, chạy:
  ```bash
  bash install_fastpanel.sh --help | grep 'Available versions'
  ```
  Sau đó, cài đặt với phiên bản mong muốn, ví dụ:
  ```bash
  bash install_fastpanel.sh -m mysql8.0
  ```

## Kết Luận
Cài đặt FastPanel trên máy chủ Linux là một quy trình đơn giản và nhanh chóng, mang lại một bảng điều khiển mạnh mẽ để quản lý các dịch vụ web. Với giao diện thân thiện, hiệu suất cao, và các tính năng như quản lý tên miền, cơ sở dữ liệu, email, và SSL, FastPanel là một thay thế tuyệt vời cho các bảng điều khiển trả phí như cPanel. Hãy bắt đầu sử dụng FastPanel để quản lý máy chủ của bạn một cách hiệu quả và tiện lợi![](https://kb.fastpanel.direct/quick_start/how-to-install-fastpanel/)[](https://insave.hosting/knowledgebase/170/how-to-install-fastpanel-on-linux-systems.html)[](https://idroot.us/install-fastpanel-ubuntu-24-04/)