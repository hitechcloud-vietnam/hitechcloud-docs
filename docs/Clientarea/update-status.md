---
id: update-status
title: Cập nhật trạng thái
---

## Cập nhật trạng thái

Cập nhật một trạng thái cụ thể.

### Yêu cầu HTTP

`PUT /statuses/@id`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|--------------|
| id | int | ID trạng thái |

### Yêu cầu mẫu

```bash
curl -X PUT "https://my.photuesoftware.vn/api/statuses/@id" \
   -H "Authorization: Bearer $token"
```