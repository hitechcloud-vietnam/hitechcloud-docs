---
id: reboot-vm
title: Khởi động lại máy ảo
---

## Khởi động lại máy ảo

Khởi động lại máy chủ ảo, có thể chỉ định ảnh ISO để khởi động.

### Yêu cầu HTTP

`POST /service/@id/vms/@vmid/reboot`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |
| iso | string | Ảnh ISO để khởi động (tùy chọn) |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"iso\": \"isoValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/reboot" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```