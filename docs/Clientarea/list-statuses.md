---
id: list-statuses
title: Danh sách trạng thái
---

## Danh sách trạng thái

Lấy danh sách tất cả trạng thái theo một trạng thái cụ thể.

### Yêu cầu HTTP

`GET /statuses`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|--------------------------------------|
| status | string | Trả về chi tiết của trạng thái |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/statuses" \
   -H "Authorization: Bearer $token"
```