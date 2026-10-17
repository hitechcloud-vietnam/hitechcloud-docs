---
id: list-vm-rebuild-templates
title: Danh sách mẫu cài lại máy ảo
---

## Danh sách mẫu cài lại máy ảo

Lấy các mẫu có thể dùng để cài lại máy chủ ảo.

### Yêu cầu HTTP

`GET /service/@id/templates/@vmid`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/templates/@vmid" \
   -H "Authorization: Bearer $token"
```