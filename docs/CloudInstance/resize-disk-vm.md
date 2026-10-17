---
id: resize-disk-vm
title: Thay đổi dung lượng ổ đĩa máy ảo
---

## Thay đổi dung lượng ổ đĩa máy ảo

Thay đổi dung lượng ổ đĩa của máy chủ ảo.

### Yêu cầu HTTP

`PUT /service/@id/vms/@vmid/storage/@diskid`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |
| diskid | string | ID ổ đĩa |
| size | int | Dung lượng ổ đĩa (GB) |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"size\": \"sizeValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/storage/@diskid" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```