---
id: list-iso-images
title: Danh sách ảnh ISO
---

## Danh sách ảnh ISO

Lấy danh sách các ảnh ISO có thể gắn vào máy chủ ảo.

### Yêu cầu HTTP

`GET /service/@id/images`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/images" \
   -H "Authorization: Bearer $token"
```