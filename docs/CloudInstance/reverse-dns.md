---
id: reverse-dns
title: DNS ngược
---

## DNS ngược

Lấy các bản ghi DNS ngược cho địa chỉ IP của máy ảo.

### Yêu cầu HTTP

`GET /service/@id/vms/@vmid/rdns`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rdns" \
   -H "Authorization: Bearer $token"
```