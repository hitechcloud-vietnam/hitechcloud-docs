---
id: rebuild-network
title: Dựng lại mạng
---

## Dựng lại mạng

Dựng lại mạng cho máy chủ ảo.

### Yêu cầu HTTP

`POST /service/@id/vms/@vmid/rebuild_network`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |
| shutdown_type | string | Kiểu tắt máy |
| force | bool | Buộc khởi động lại |
| startup | bool | Bắt buộc khởi động |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"shutdown_type\": \"shutdown_typeValue\",
    \"force\": \"forceValue\",
    \"startup\": \"startupValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rebuild_network" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```