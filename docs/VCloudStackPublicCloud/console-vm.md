---
id: console-vm
title: Console máy ảo
---

## Console máy ảo

Lấy thông tin console của máy chủ ảo.

### Yêu cầu HTTP

`GET /service/@id/vms/@vmid/console`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/console" \
   -H "Authorization: Bearer $token"
```