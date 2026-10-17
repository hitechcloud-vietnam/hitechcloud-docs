---
id: unrescue-vm
title: Thoát chế độ cứu hộ máy ảo
---

## Thoát chế độ cứu hộ máy ảo

Tắt chế độ cứu hộ của máy chủ ảo.

### Yêu cầu HTTP

`POST /service/@id/vms/@vmid/unrescue`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/unrescue" \
   -H "Authorization: Bearer $token"
```