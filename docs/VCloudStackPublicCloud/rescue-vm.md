---
id: rescue-vm
title: Cứu hộ máy ảo
---

## Cứu hộ máy ảo

Khởi động lại máy chủ ảo vào chế độ cứu hộ.

### Yêu cầu HTTP

`POST /service/@id/vms/@vmid/rescue`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rescue" \
   -H "Authorization: Bearer $token"
```