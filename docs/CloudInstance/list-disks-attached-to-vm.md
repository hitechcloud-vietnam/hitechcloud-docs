---
id: list-disks-attached-to-vm
title: Danh sách ổ đĩa gắn với máy ảo
---

## Danh sách ổ đĩa gắn với máy ảo

Lấy danh sách các ổ đĩa của một máy chủ ảo cụ thể.

### Yêu cầu HTTP

`GET /service/@id/vms/@vmid/storage`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/storage" \
   -H "Authorization: Bearer $token"
```