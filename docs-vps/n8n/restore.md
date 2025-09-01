# Hướng dẫn khôi phục n8n từ Backup

Hướng dẫn này cung cấp một script để khôi phục (restore) dữ liệu n8n từ file backup được tạo bởi script tự động cập nhật n8n. Script này giúp quay lại trạng thái trước đó nếu phiên bản mới của n8n không tương thích với mã nguồn hiện tại.

## Mục tiêu của Script
- Khôi phục dữ liệu từ file backup `.tar.gz` vào volume `n8n_data`.
- Ghi đè dữ liệu mà không xóa volume hiện tại.
- Dọn dẹp tài nguyên tạm sau khi hoàn tất.

## Yêu cầu
- **Hệ điều hành**: Debian 12, Ubuntu 22.04 hoặc 24.04.
- **Docker và Docker Compose**: Đã cài đặt và cấu hình n8n trong thư mục `/home/n8n`.
- **File backup**: File `.tar.gz` được tạo từ script cập nhật n8n (ví dụ: `/home/n8n/backups/n8n_backup_YYYYMMDD-HHMMSS.tar.gz`).
- **Quyền truy cập**: Quyền root hoặc sudo.

## Script khôi phục n8n

1. **Tạo file script**:
   ```bash
   nano /home/n8n/restore-n8n.sh
   ```

2. **Dán nội dung script sau**:
   ```bash
   #!/bin/bash

   # ========================
   # Config
   # ========================
   BACKUP_FILE="$1"                 # File backup cần restore (.tar.gz)
   VOLUME_NAME="n8n_data"            # Tên volume cần restore vào
   TEMP_CONTAINER="n8n-restore-temp" # Tên container tạm
   TMP_DIR="/tmp/n8n_restore"        # Thư mục tạm để giải nén

   # ========================
   # Bắt đầu
   # ========================
   if [ -z "$BACKUP_FILE" ]; then
       echo "❗ Bạn phải truyền vào file backup (.tar.gz) để restore!"
       echo "💬 Ví dụ: ./restore-n8n.sh /home/n8n/backups/n8n_backup_20240502-0945.tar.gz"
       exit 1
   fi

   if [ ! -f "$BACKUP_FILE" ]; then
       echo "❗ File backup không tồn tại: $BACKUP_FILE"
       exit 1
   fi

   echo "🔄 Đang restore dữ liệu từ: $BACKUP_FILE"
   echo "⏳ Step 1: Tạo container tạm để ghi dữ liệu vào volume..."

   # Xóa container tạm nếu đã tồn tại
   docker rm -f ${TEMP_CONTAINER} > /dev/null 2>&1 || true

   # Tạo container tạm gắn với volume
   docker run -d --name ${TEMP_CONTAINER} -v ${VOLUME_NAME}:/data busybox sleep 3600

   # Tạo thư mục tạm
   mkdir -p ${TMP_DIR}
   cd ${TMP_DIR}

   # Giải nén file backup
   tar xzvf ${BACKUP_FILE}

   echo "⏳ Step 2: Ghi đè dữ liệu vào volume..."
   # Copy dữ liệu vào volume
   docker cp data/. ${TEMP_CONTAINER}:/data/

   # Dọn dẹp
   docker rm -f ${TEMP_CONTAINER}
   rm -rf ${TMP_DIR}

   echo "🎉 Restore hoàn tất!"
   ```

3. **Lưu và cấp quyền thực thi**:
   ```bash
   chmod +x /home/n8n/restore-n8n.sh
   ```

4. **Chạy script để khôi phục**:
   ```bash
   cd /home/n8n
   ./restore-n8n.sh /home/n8n/backups/n8n_backup_YYYYMMDD-HHMMSS.tar.gz
   ```
   - Thay `YYYYMMDD-HHMMSS` bằng thời gian của file backup cụ thể (ví dụ: `n8n_backup_20250822-211000.tar.gz`).

5. **Khởi động lại n8n để áp dụng dữ liệu**:
   ```bash
   docker compose up -d n8n
   ```

## Kết quả sau khi chạy
- Dữ liệu trong volume `n8n_data` được khôi phục về trạng thái tại thời điểm backup.
- Container n8n được khởi động lại và hoạt động với dữ liệu đã khôi phục.
- Các file và container tạm được dọn dẹp tự động.

## Ưu điểm của Script
- **An toàn**: Chỉ ghi đè dữ liệu vào volume `n8n_data`, không ảnh hưởng đến cấu hình Docker hoặc hệ thống.
- **Đơn giản**: Không cần xóa volume hoặc rebuild container.
- **Tự động hóa**: Quy trình restore được thực hiện nhanh chóng với một lệnh duy nhất.

## Lưu ý
- **Kiểm tra file backup**: Đảm bảo file `.tar.gz` tồn tại và đúng đường dẫn trước khi chạy script.
- **Kiểm tra trạng thái container**:
  ```bash
  docker ps
  ```
- **Xử lý lỗi**:
  - Nếu script không chạy, kiểm tra quyền thực thi (`chmod +x`) và đường dẫn file backup.
  - Nếu restore không thành công, kiểm tra log container:
    ```bash
    docker logs n8n
    ```
- **Sao lưu thêm**: Trước khi restore, tạo một bản sao lưu mới của volume hiện tại để tránh mất dữ liệu:
  ```bash
  docker run --rm -v n8n_data:/data -v /home/n8n/backups:/backup busybox tar czvf /backup/n8n_backup_$(date +"%Y%m%d-%H%M%S").tar.gz /data
  ```

## Kết luận
Script này giúp khôi phục n8n về trạng thái trước đó một cách nhanh chóng và an toàn, đặc biệt hữu ích khi bản cập nhật mới không tương thích. Với các bước đơn giản, bạn có thể dễ dàng quay lại phiên bản ổn định và tiếp tục sử dụng n8n mà không lo mất dữ liệu.

Chúc bạn thực hiện thành công!