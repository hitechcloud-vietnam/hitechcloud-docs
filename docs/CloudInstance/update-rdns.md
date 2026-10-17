---
id: update-rdns
title: Cập nhật rDNS
---

## Cập nhật rDNS

Cập nhật các bản ghi DNS ngược cho địa chỉ IP của máy ảo.

### Yêu cầu HTTP

`POST /service/@id/vms/@vmid/rdns`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|--------------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |
| ipaddress | string | Ánh xạ địa chỉ IP với hostname |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"ipaddress\": \"192.168.10.15\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rdns" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```