---
id: list-os-templates
title: Danh sách mẫu hệ điều hành
---

## Danh sách mẫu hệ điều hành

Lấy danh sách các mẫu có thể dùng để tạo máy chủ ảo.

### Yêu cầu HTTP

`GET /service/@id/templates`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/templates" \
   -H "Authorization: Bearer $token"
```