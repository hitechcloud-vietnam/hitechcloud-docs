---
id: list-vm-ips
title: List VM IPs
---

## List VM IPs

Retrieve the IPs assigned to a virtual server.

### HTTP Request

`GET /service/@id/vms/@vmid/ips`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ips" \
   -H "Authorization: Bearer $token"
```