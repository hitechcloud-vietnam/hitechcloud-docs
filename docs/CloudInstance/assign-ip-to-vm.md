---
id: assign-ip-to-vm
title: Gán IP cho máy ảo
---

## Gán IP cho máy ảo

Thêm một IP mới cho máy chủ ảo.

### Yêu cầu HTTP

`POST /service/@id/vms/@vmid/ips`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|--------------|--------|----------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |
| ipid | string | ID địa chỉ IP |
| interfaceid | string | ID giao diện mạng |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"ipid\": \"ipidValue\",
    \"interfaceid\": \"interfaceidValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ips" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```