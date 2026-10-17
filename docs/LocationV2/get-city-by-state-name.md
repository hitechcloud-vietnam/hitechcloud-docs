---
id: get-city-by-state-name
title: Lấy thành phố theo tên tỉnh/bang
---

## Lấy thành phố theo tên tỉnh/bang

Lấy các thành phố của tỉnh/bang có tên tương ứng.

### Yêu cầu HTTP

`GET /location_v2/state/city/@name`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|--------------|
| name | string | Tên tỉnh/bang |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/location_v2/state/city/@name"
```