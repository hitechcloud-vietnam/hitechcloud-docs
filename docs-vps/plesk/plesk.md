# Hướng dẫn cài đặt Plesk trên Linux

Plesk là một hệ thống quản lý web hosting (WHM) được sử dụng rộng rãi trên thế giới. Plesk cung cấp một giao diện web thân thiện với người dùng, giúp quản lý các website và dịch vụ web hosting một cách dễ dàng.

## Yêu cầu hệ thống

- **RAM:** 1 GB + 1 GB swap
- **Disk:** 20GB
- **Bản quyền Plesk**

### Hệ điều hành hỗ trợ

- Debian 10+
- Ubuntu 18.04+
- Ubuntu 22.04 LTS for ARM
- CentOS 7.x
- Red Hat Enterprise Linux 7x, 8x, 9x
- CloudLinux 7.1 and later
- CloudLinux 8.x
- AlmaLinux 8.x, 9x
- Rocky Linux 8.x
- Virtuozzo Linux 7

## Các bước cài đặt Plesk trên Linux

Để cài đặt Plesk trên Linux có nhiều cách tuy nhiên tôi sẽ chọn ra 2 cách đơn giản nhất để viết lại hướng dẫn này. Bạn có thể chọn 1 trong 2 cách bên dưới để thực hiện.

### Cách 1: Cài đặt bằng lệnh

Với cách này bạn chỉ cần copy tập lệnh bên dưới và vào vào cửa sổ Terminal với quyền root.

```bash
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

### Cách 2: Cài đặt online

Với cách này bạn cần không SSH vào máy chủ, mà cách này bạn cần truy cập vào trang [get.plesk.com](https://get.plesk.com) sau đó nhập vào thông tin máy chủ để cài đặt bao gồm:

- **Server IP address or hostname:** Bạn nhập vào địa chỉ IP máy chủ
- **Connect to the server using:** Chọn SSH login/password
- **SSH login:** Nhập vào user là root
- **SSH Password:** Nhập vào mật khẩu root của VPS
- Tick vào **Install OS updates before starting Plesk installation**
- Và cuối cùng chọn **Continue** để cài đặt

Tick chọn vào điều khoản và chọn **INSTALL**

Hệ thống sẽ tự động cài đặt và bạn không cần làm gì cả, việc bây giờ là chờ đợi cho đến khi hoàn tất.

Sau khi hoàn tất bạn sẽ nhận được thông báo **Installation Completed**. Bạn copy đường link và truy cập vào trình duyệt để đăng nhập. Thông tin đăng nhập cũng chính là thông tin root.

## Quản lý Plesk sau khi cài đặt

Plesk là một hệ thống quản trị web mạnh mẽ và linh hoạt, có thể giúp bạn dễ dàng quản lý các trang web và ứng dụng của mình. Hướng dẫn cài đặt Plesk trên Linux trong bài viết này đã cung cấp cho bạn các bước cần thiết để cài đặt Plesk trên máy chủ Linux của mình.

Sau khi cài đặt Plesk, bạn có thể đăng nhập vào giao diện Plesk bằng tài khoản người dùng và mật khẩu mà bạn đã tạo trong quá trình cài đặt. Giao diện Plesk cung cấp cho bạn một bảng điều khiển trực quan để quản lý tất cả các khía cạnh của các trang web và ứng dụng của bạn, bao gồm:

- Tạo và quản lý miền
- Tạo và quản lý tài khoản người dùng
- Cài đặt và quản lý ứng dụng web
- Quản lý FTP, email, và các dịch vụ khác

## Mẹo sử dụng Plesk hiệu quả

- **Đọc tài liệu hướng dẫn của Plesk:** Tài liệu hướng dẫn cung cấp cho bạn thông tin chi tiết về cách sử dụng tất cả các tính năng của Plesk.
- **Tham gia diễn đàn hỗ trợ của Plesk:** Diễn đàn hỗ trợ là một nơi tuyệt vời để tìm kiếm trợ giúp nếu bạn gặp khó khăn khi sử dụng Plesk.
- **Tìm kiếm các plugin và tiện ích mở rộng của Plesk:** Có nhiều plugin và tiện ích mở rộng của Plesk có sẵn để mở rộng tính năng của Plesk.

Chúc bạn thành công!