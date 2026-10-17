---
id: upgrade-request
title: Yêu cầu nâng cấp
---

## Yêu cầu nâng cấp

Ước tính hoặc yêu cầu nâng cấp tài nguyên cho một dịch vụ.

### Yêu cầu HTTP

`POST /service/@id/upgrade`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

### Yêu cầu mẫu

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token"
```