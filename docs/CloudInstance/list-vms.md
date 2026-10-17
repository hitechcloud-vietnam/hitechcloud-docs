---
id: list-vms
title: Danh sách máy ảo
---

## Danh sách máy ảo

Lấy danh sách các máy ảo.

### Yêu cầu HTTP

`GET /service/@id/vms`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token"
```