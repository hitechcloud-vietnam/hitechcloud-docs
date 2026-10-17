---
id: vm-cpu-usage-graph
title: Biểu đồ sử dụng CPU của máy ảo
---

## Biểu đồ sử dụng CPU của máy ảo

Lấy mã HTML để nhúng biểu đồ sử dụng CPU của máy chủ ảo.

### Yêu cầu HTTP

`GET /service/@id/vms/@vmid/usage/cpu`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/usage/cpu" \
   -H "Authorization: Bearer $token"
```