# Hướng dẫn cập nhật n8n tự động bằng Script

Hướng dẫn này cung cấp một script để tự động cập nhật n8n trên VPS sử dụng Docker, bao gồm backup dữ liệu, kéo image mới nhất, restart container và dọn dẹp image cũ. Script giúp đơn giản hóa quy trình, đảm bảo an toàn với backup trước khi cập nhật.

## Mục tiêu của Script
- **Backup volume**: Sao lưu volume `n8n_data` thành file `.tar.gz`.
- **Kéo image mới nhất**: Tải phiên bản mới nhất của n8n.
- **Restart container**: Khởi động lại container n8n với cấu hình hiện tại.
- **Dọn dẹp image cũ**: Xóa các image không còn sử dụng để tiết kiệm dung lượng.

## Yêu cầu
- **Hệ điều hành**: Debian 12, Ubuntu 22.04 hoặc 24.04.
- **Docker và Docker Compose**: Đã được cài đặt (theo hướng dẫn cài đặt n8n trước đó).
- **Quyền truy cập**: Quyền root hoặc sudo.
- **Cấu hình n8n**: Đã triển khai n8n trong thư mục `/home/n8n` với file `docker-compose.yml`.

## Script cập nhật n8n

1. **Tạo file script**:
   ```bash
   nano /home/n8n/update-n8n.sh
   ```

2. **Dán nội dung script sau**:
   ```bash
   #!/bin/bash

   # ========================
   # Config
   # ========================
   COMPOSE_PATH="/home/n8n"         # Đường dẫn tới folder docker-compose.yml
   BACKUP_PATH="/home/n8n/backups"   # Nơi lưu file backup
   VOLUME_NAME="n8n_data"            # Tên volume của n8n
   TIME_NOW=$(date +"%Y%m%d-%H%M%S") # Thời gian hiện tại để đặt tên file backup
   BACKUP_FILE="${BACKUP_PATH}/n8n_backup_${TIME_NOW}.tar.gz"

   # ========================
   # Bắt đầu
   # ========================
   echo "🔄 Updating n8n..."
   echo "⏳ Step 1: Backup dữ liệu volume: $VOLUME_NAME"

   # Tạo thư mục backup nếu chưa có
   mkdir -p "${BACKUP_PATH}"

   # Backup volume
   docker run --rm -v ${VOLUME_NAME}:/data -v ${BACKUP_PATH}:/backup busybox tar czvf /backup/n8n_backup_${TIME_NOW}.tar.gz /data

   echo "✅ Backup thành công: ${BACKUP_FILE}"

   # Di chuyển vào thư mục docker-compose
   cd "${COMPOSE_PATH}"

   # Kéo image mới nhất
   echo "⏳ Step 2: Pull image mới nhất..."
   docker compose pull n8n

   # Restart container
   echo "⏳ Step 3: Restart container..."
   docker compose up -d n8n

   # Xóa image cũ
   echo "⏳ Step 4: Dọn dẹp image cũ..."
   docker image prune -f

   echo "🎉 Update và Backup hoàn tất!"
   ```

3. **Lưu và cấp quyền thực thi**:
   ```bash
   chmod +x /home/n8n/update-n8n.sh
   ```

4. **Chạy script**:
   ```bash
   cd /home/n8n
   ./update-n8n.sh
   ```

## Kết quả sau khi chạy
- **File backup**: Được lưu tại `/home/n8n/backups/` với tên dạng `n8n_backup_YYYYMMDD-HHMMSS.tar.gz` (ví dụ: `n8n_backup_20250822-211000.tar.gz`).
- **Container n8n**: Được khởi động lại với image mới nhất.
- **Dọn dẹp**: Các image cũ không sử dụng sẽ bị xóa.

## Tự động hóa với Cronjob
Để cập nhật n8n tự động hàng tuần (ví dụ: mỗi Thứ Hai lúc 3h sáng):
1. **Mở crontab**:
   ```bash
   crontab -e
   ```

2. **Thêm dòng sau**:
   ```bash
   0 3 * * 1 /home/n8n/update-n8n.sh >> /home/n8n/update-log.txt 2>&1
   ```
   - Lệnh này chạy script vào 3:00 sáng Thứ Hai hàng tuần và lưu log vào `/home/n8n/update-log.txt`.

## Ưu điểm của Script
- **An toàn**: Backup volume trước khi cập nhật, dễ dàng khôi phục nếu có lỗi.
- **Gọn nhẹ**: Tự động hóa toàn bộ quy trình, dễ kiểm soát.
- **Tiện lợi**: Có thể chạy thủ công hoặc lên lịch tự động qua cronjob.

## Lưu ý
- **Kiểm tra backup**: Đảm bảo file backup được tạo thành công trước khi xóa các file cũ.
- **Khôi phục backup (nếu cần)**:
  ```bash
  docker run --rm -v n8n_data:/data -v /home/n8n/backups:/backup busybox tar xzvf /backup/n8n_backup_YYYYMMDD-HHMMSS.tar.gz -C /data
  ```
- **Kiểm tra trạng thái container**:
  ```bash
  docker ps
  ```
- **Xử lý lỗi**:
  - Nếu script không chạy, kiểm tra quyền thực thi (`chmod +x`) và đường dẫn trong `COMPOSE_PATH`.
  - Xem log nếu có lỗi:
    ```bash
    cat /home/n8n/update-log.txt
    ```

## Kết luận
Script này giúp tự động hóa việc cập nhật n8n, đảm bảo an toàn với backup và tiết kiệm thời gian. Bạn có thể chạy thủ công hoặc lên lịch tự động qua cronjob để giữ n8n luôn ở phiên bản mới nhất.

Chúc bạn thực hiện thành công!