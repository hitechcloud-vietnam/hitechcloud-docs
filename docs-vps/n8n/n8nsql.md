# Cài đặt n8n với PostgreSQL

Hướng dẫn này cung cấp cách cài đặt n8n, một công cụ tự động hóa workflow mã nguồn mở, với cơ sở dữ liệu PostgreSQL trên VPS Ubuntu hoặc Debian. Script tự động cài đặt n8n, PostgreSQL, Node.js, Nginx, và cấu hình SSL qua Let’s Encrypt.

## Tại sao sử dụng PostgreSQL?
Mặc định, n8n sử dụng **SQLite** để lưu trữ workflows, credentials, và execution history trong file `.db.sqlite`. Tuy nhiên, trong môi trường production, PostgreSQL (hoặc MySQL) được khuyến nghị vì các lý do sau:

- **Đa luồng & đồng thời**: SQLite chỉ hỗ trợ một kết nối ghi tại một thời điểm, dễ gây tắc nghẽn khi chạy nhiều workflow cùng lúc.
- **Khả năng mở rộng**: PostgreSQL hỗ trợ scale, replica, và backup độc lập.
- **Độ bền & sao lưu**: Dễ dàng tích hợp với hạ tầng doanh nghiệp có sẵn.
- **Hỗ trợ transaction**: Phù hợp cho các workflow phức tạp cần rollback.

**Lưu ý**: Bạn cũng có thể sử dụng MySQL/MariaDB bằng cách thay đổi `DB_TYPE=mysqldb` và các thông số tương ứng.

### Khi nào không cần PostgreSQL?
- Dùng để test nhanh, demo cá nhân, hoặc môi trường phát triển nhẹ.
- Dữ liệu nhỏ, không cần tính sẵn sàng cao (high-availability).

## Yêu cầu
- **Hệ điều hành**: Ubuntu 20.04, 22.04, 24.04 hoặc Debian 12.
- **RAM**: Tối thiểu 1GB (khuyến nghị 2GB trở lên).
- **CPU**: Tối thiểu 1 core (khuyến nghị 2 core trở lên).
- **Disk**: Tối thiểu 10GB, khuyến nghị nhiều hơn để lưu trữ dữ liệu.
- **Tên miền**: Phải trỏ tên miền hoặc subdomain về IP VPS trước khi cài đặt để hỗ trợ SSL.
- **Quyền truy cập**: Root hoặc sudo qua SSH.
- **Kết nối internet**: Ổn định để tải gói cài đặt.

## Tính năng của Script
Script tự động thực hiện các bước sau:
1. **Cập nhật môi trường**: Cài đặt các gói cơ bản (`dnsutils`, `git`, `curl`, `build-essential`).
2. **Kiểm tra DNS**: Xác minh tên miền đã trỏ đúng về IP VPS.
3. **Tạo user hệ thống**: Tạo user `n8n` và thư mục `/home/n8n`.
4. **Cài đặt PostgreSQL**: Cài đặt, tạo role `n8nuser` và database `n8ndb` với mật khẩu ngẫu nhiên.
5. **Cài đặt NVM và Node.js 22**: Cài Node.js qua NVM và đặt làm mặc định.
6. **Cài đặt n8n**: Khởi tạo và cài đặt n8n mới nhất qua npm.
7. **Cấu hình môi trường**: Tạo file `.env` với thông tin PostgreSQL và n8n.
8. **Cài đặt PM2**: Quản lý tiến trình n8n và tự khởi động sau khi reboot.
9. **Cài đặt Nginx**: Cấu hình reverse proxy và hỗ trợ WebSocket.
10. **Cài đặt SSL**: Sử dụng Let’s Encrypt để cấp chứng chỉ HTTPS.
11. **Hiển thị kết quả**: In URL truy cập và nhắc tạo tài khoản admin.

## Hướng dẫn cài đặt
1. **Đăng nhập VPS qua SSH**:
   ```bash
   ssh root@server-ip
   ```

2. **Tải và chạy script**:
   ```bash
   wget https://raw.githubusercontent.com/bnixvn/n8n/refs/heads/main/n8n.sh
   chmod +x n8n.sh
   ./n8n.sh
   ```

3. **Lưu ý quan trọng**:
   - Đảm bảo tên miền hoặc subdomain đã được trỏ về IP VPS (bản ghi A trên DNS provider, ví dụ: Cloudflare).
   - Script chỉ hoạt động trên **Ubuntu 20.04, 22.04, 24.04 hoặc Debian 12**.
   - Quá trình cài đặt mất khoảng 5-10 phút, tùy cấu hình VPS.

4. **Truy cập n8n**:
   - Sau khi cài đặt, script sẽ hiển thị URL (ví dụ: `https://yourdomain.com`).
   - Truy cập URL qua trình duyệt và tạo tài khoản admin theo hướng dẫn.

5. **Kiểm tra dịch vụ**:
   - Kiểm tra trạng thái PostgreSQL:
     ```bash
     sudo systemctl status postgresql
     ```
   - Kiểm tra trạng thái n8n (qua PM2):
     ```bash
     pm2 list
     ```
   - Kiểm tra Nginx:
     ```bash
     sudo systemctl status nginx
     ```

## Lưu ý
- **Tên miền**: Phải trỏ tên miền về IP VPS trước khi chạy script để Let’s Encrypt cấp SSL.
- **Mở cổng**: Đảm bảo cổng 80 và 443 được mở trong tường lửa:
  ```bash
  sudo ufw allow 80
  sudo ufw allow 443
  ```
- **Bảo mật**:
  - Đổi mật khẩu admin ngay sau khi đăng nhập.
  - Sao lưu mật khẩu PostgreSQL (`n8nuser`) được tạo tự động trong file `.env`.
- **Sao lưu**: Tạo snapshot VPS trước khi cài đặt để khôi phục nếu có lỗi.
- **Xử lý lỗi**:
  - **DNS không trỏ đúng**: Kiểm tra bằng:
    ```bash
    dig yourdomain.com
    ```
  - **Không truy cập được giao diện**: Kiểm tra cổng 443 và trạng thái Nginx:
    ```bash
    netstat -tuln | grep 443
    sudo systemctl status nginx
    ```
  - **Lỗi PostgreSQL**: Kiểm tra log:
    ```bash
    sudo journalctl -u postgresql
    ```
  - **Lỗi PM2**: Kiểm tra log n8n:
    ```bash
    pm2 logs n8n
    ```

## Kết luận
Script này giúp cài đặt n8n với PostgreSQL một cách nhanh chóng, tích hợp Nginx và SSL tự động. Với cấu hình tối ưu cho môi trường production, bạn có thể tận dụng khả năng đa luồng, độ bền và dễ dàng mở rộng của PostgreSQL. Hãy làm theo các bước trên để triển khai n8n và bắt đầu tự động hóa workflow!

Chúc bạn cài đặt thành công!