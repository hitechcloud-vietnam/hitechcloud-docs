---
id: stop-vm
title: Dừng máy ảo
---

## Dừng máy ảo

Dừng máy chủ ảo.

### Yêu cầu HTTP

`POST /service/@id/vms/@vmid/stop`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/stop" \
   -H "Authorization: Bearer $token"
```