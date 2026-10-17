---
id: server-power-status
title: Trạng thái nguồn máy chủ
---

## Trạng thái nguồn máy chủ

Lấy trạng thái nguồn của máy chủ.

### Yêu cầu HTTP

`GET /service/@id/status`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/status"
```