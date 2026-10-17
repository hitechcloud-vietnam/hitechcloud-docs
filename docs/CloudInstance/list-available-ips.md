---
id: list-available-ips
title: Danh sách IP khả dụng
---

## Danh sách IP khả dụng

Lấy danh sách các IP có thể gán cho máy chủ ảo.

### Yêu cầu HTTP

`GET /service/@id/vms/@vmid/interfaces/@iface/ips`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |
| iface | string | ID giao diện mạng |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces/@iface/ips" \
   -H "Authorization: Bearer $token"
```