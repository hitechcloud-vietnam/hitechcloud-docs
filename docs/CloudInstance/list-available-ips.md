---
id: list-available-ips
title: List Available IPs
---

## List Available IPs

Retrieve a list of IPs that can be assigned to a virtual server.

### HTTP Request

`GET /service/@id/vms/@vmid/interfaces/@iface/ips`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |
| iface     | string | Network interface ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces/@iface/ips" \
   -H "Authorization: Bearer $token"
```