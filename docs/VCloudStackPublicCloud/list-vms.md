---
id: list-vms
title: Danh sách máy ảo
---

## Danh sách máy ảo

Lấy danh sách các máy ảo.

### Yêu cầu HTTP

`GET /service/@id/vms`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu

```json
{
  "service_id": 101,
  "vms": [
    {
      "vmid": "vm-201",
      "name": "prod-web-1",
      "status": "ACTIVE",
      "ip_address": "10.0.10.5",
      "flavor": "m1.medium",
      "image": "Ubuntu 22.04",
      "created_at": "2025-05-01T09:00:00Z"
    },
    {
      "vmid": "vm-202",
      "name": "prod-db-1",
      "status": "SHUTOFF",
      "ip_address": "10.0.10.6",
      "flavor": "m1.large",
      "image": "Debian 12",
      "created_at": "2025-05-03T14:30:00Z"
    }
  ]
}
```