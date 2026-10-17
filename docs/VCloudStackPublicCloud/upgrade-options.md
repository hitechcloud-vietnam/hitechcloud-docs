id: upgrade-options
title: Tùy chọn nâng cấp
---

## Tùy chọn nâng cấp

Liệt kê các tùy chọn nâng cấp tài nguyên cho một dịch vụ.

### Yêu cầu HTTP

`GET /service/@id/upgrade`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token"
```