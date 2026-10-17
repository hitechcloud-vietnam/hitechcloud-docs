---
id: get-vm-details
title: Lấy chi tiết máy ảo
---

## Lấy chi tiết máy ảo

Lấy thông tin chi tiết của một máy ảo cụ thể.

### Yêu cầu HTTP

`GET /service/@id/vms/@vmid`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token"
```
