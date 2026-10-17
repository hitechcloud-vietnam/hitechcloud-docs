---
id: get-city
title: Lấy danh sách thành phố
---

## Lấy danh sách thành phố

Lấy các thành phố theo ID của tỉnh/bang.

### Yêu cầu HTTP

`GET /location_v2/state/@id/city`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tỉnh/bang |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/location_v2/state/@id/city"
```