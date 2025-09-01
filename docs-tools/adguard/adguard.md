# Cài đặt AdGuard Home

AdGuard Home là công cụ chặn quảng cáo, nội dung nguy hiểm và theo dõi khi lướt web, hoạt động như một DNS server. Hướng dẫn này tập trung vào cách cài đặt AdGuard Home trên VPS chạy Ubuntu/Debian, bao gồm cả phương pháp tự động và thủ công.

## Yêu cầu
- **VPS**: Ubuntu hoặc Debian (khuyến nghị phiên bản LTS).
- **Quyền truy cập**: Quyền root hoặc sudo qua SSH.
- **Kết nối internet**: Ổn định để tải gói cài đặt.
- **Cổng**: Mở cổng 3000 (cho giao diện web) và 53 (cho DNS).

## Cài đặt AdGuard Home

### 1. Cài đặt tự động
Phương pháp này đơn giản, tự động hóa toàn bộ quá trình cài đặt.

1. **Đăng nhập VPS qua SSH**:
   ```bash
   ssh root@server-ip
   ```

2. **Chạy script cài đặt**:
   ```bash
   curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
   ```
   - Lệnh này tải và thực thi script cài đặt AdGuard Home, tự động cấu hình các dịch vụ cần thiết.
   - Quá trình mất khoảng 2-5 phút.

3. **Kiểm tra trạng thái**:
   Sau khi cài đặt, AdGuard Home sẽ chạy như một dịch vụ. Kiểm tra bằng:
   ```bash
   sudo systemctl status adguard-home
   ```

### 2. Cài đặt thủ công
Phương pháp này dành cho người muốn kiểm soát chi tiết hơn.

1. **Cài đặt các gói phụ thuộc**:
   ```bash
   apt-get update
   apt-get install -y sudo nano bind9-host
   ```

2. **Tải và giải nén AdGuard Home**:
   ```bash
   wget https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz
   tar xvf AdGuardHome_linux_amd64.tar.gz
   ```

3. **Di chuyển đến thư mục AdGuard Home**:
   ```bash
   cd AdGuardHome
   pwd
   ```

4. **Cài đặt dịch vụ AdGuard Home**:
   ```bash
   sudo ./AdGuardHome -s install
   ```
   - Lệnh này cài đặt AdGuard Home như một dịch vụ hệ thống.

5. **Kiểm tra trạng thái dịch vụ**:
   ```bash
   sudo systemctl status adguard-home
   ```

## Truy cập giao diện web
- Mở trình duyệt và truy cập:
  ```
  http://<server-ip>:3000
  ```
  Thay `<server-ip>` bằng địa chỉ IP công khai của VPS.

- **Cấu hình lần đầu**:
  - Làm theo hướng dẫn trên giao diện web để thiết lập tài khoản admin.
  - Đổi mật khẩu mặc định để tăng cường bảo mật.

## Cấu hình thiết bị để sử dụng AdGuard Home
Để sử dụng AdGuard Home làm DNS server trên thiết bị của bạn:
1. Thay đổi cài đặt DNS trên máy tính hoặc router:
   - **DNS Server**: Đặt thành địa chỉ IP công khai của VPS (ví dụ: `1.2.3.4`).
   - **Cổng DNS**: Mặc định là 53.
2. Kiểm tra kết nối DNS bằng cách truy cập một trang web. Quảng cáo và nội dung nguy hiểm sẽ bị chặn nếu cấu hình đúng.

## Lưu ý
- **Mở cổng**: Đảm bảo cổng 3000 (web) và 53 (DNS) được mở trong tường lửa:
  ```bash
  sudo ufw allow 3000
  sudo ufw allow 53
  ```
- **Bảo mật**: Bật 2FA (nếu có) và cập nhật AdGuard Home thường xuyên.
- **Sao lưu**: Tạo snapshot VPS trước khi cài đặt để khôi phục nếu gặp lỗi.
- **Xử lý lỗi**:
  - **Không truy cập được giao diện web**: Kiểm tra trạng thái dịch vụ hoặc cổng 3000:
    ```bash
    netstat -tuln | grep 3000
    ```
  - **DNS không hoạt động**: Xác minh cài đặt DNS trên thiết bị và kiểm tra cổng 53.

## Kết luận
AdGuard Home là một công cụ mạnh mẽ để chặn quảng cáo và bảo vệ quyền riêng tư khi lướt web. Với hai phương pháp cài đặt (tự động hoặc thủ công), bạn có thể dễ dàng triển khai trên VPS và quản lý thông qua giao diện web thân thiện. Hãy làm theo các bước trên để cài đặt và tận hưởng trải nghiệm lướt web không quảng cáo!

Chúc bạn cài đặt thành công!