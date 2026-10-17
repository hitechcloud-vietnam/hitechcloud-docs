---
id: get-vm-usage
title: Lấy mức sử dụng của máy ảo
---

## Lấy mức sử dụng của máy ảo

Lấy thông tin sử dụng của một máy chủ ảo cụ thể.

### Yêu cầu HTTP

`GET /service/@id/vms/@vmid/usage`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/usage" \
   -H "Authorization: Bearer $token"
```