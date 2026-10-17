---
id: remove-ip-from-vm
title: Gỡ IP khỏi máy ảo
---

## Gỡ IP khỏi máy ảo

Gỡ một IP khỏi máy chủ ảo.

### Yêu cầu HTTP

`DELETE /service/@id/vms/@vmid/ips/@ipid`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|--------------|--------|----------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |
| ipid | string | ID địa chỉ IP |
| interfaceid | string | ID giao diện mạng |

### Yêu cầu mẫu

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ips/@ipid" \
   -H "Authorization: Bearer $token"
```