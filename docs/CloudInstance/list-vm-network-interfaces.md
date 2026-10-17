---
id: list-vm-network-interfaces
title: Danh sách giao diện mạng của máy ảo
---

## Danh sách giao diện mạng của máy ảo

Lấy các giao diện mạng đã gán cho máy chủ ảo.

### Yêu cầu HTTP

`GET /service/@id/vms/@vmid/interfaces`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces" \
   -H "Authorization: Bearer $token"
```