---
id: destroy-vm
title: Hủy máy ảo
---

## Hủy máy ảo

Xóa một máy chủ ảo.

### Yêu cầu HTTP

`DELETE /service/@id/vms/@vmid`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy chủ ảo |

### Yêu cầu mẫu

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token"
```