---
id: get-state
title: Lấy danh sách tỉnh/bang
---

## Lấy danh sách tỉnh/bang

Lấy các tỉnh/bang theo mã quốc gia.

### Yêu cầu HTTP

`GET /location_v2/@code/state`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|----------------|
| code | string | Mã quốc gia |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/location_v2/@code/state"
```