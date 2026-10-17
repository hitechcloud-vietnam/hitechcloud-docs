---
id: resize-vm
title: Thay đổi cấu hình máy ảo
---

## Thay đổi cấu hình máy ảo

Sửa cấu hình của máy chủ ảo.

### Yêu cầu HTTP

`PUT /service/@id/vms/@vmid`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-------------|--------|----------------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |
| memory | string | Dung lượng RAM (MB) |
| cpu | string | Số nhân CPU |
| cpu_share | string | Tỷ lệ chia sẻ CPU (%) |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"memory\": \"memoryValue\",
    \"cpu\": \"cpuValue\",
    \"cpu_share\": \"cpu_shareValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```