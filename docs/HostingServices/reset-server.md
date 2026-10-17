---
id: reset-server
title: Đặt lại máy chủ
---

## Đặt lại máy chủ

Đặt máy chủ về trạng thái mặc định.

### Yêu cầu HTTP

`POST /service/@id/reset`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"id\": \"idValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/reset" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```