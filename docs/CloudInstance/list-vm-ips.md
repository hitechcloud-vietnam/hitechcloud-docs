---
id: list-vm-ips
title: Danh sách IP của máy ảo
---

## Danh sách IP của máy ảo

Lấy các IP đã gán cho máy chủ ảo.

### Yêu cầu HTTP

`GET /service/@id/vms/@vmid/ips`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ips" \
   -H "Authorization: Bearer $token"
```