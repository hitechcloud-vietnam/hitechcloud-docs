---
id: list-vm-network-interfaces
title: List VM Network Interfaces
---

## List VM Network Interfaces

Retrieve the network interfaces assigned to a virtual server.

### HTTP Request

`GET /service/@id/vms/@vmid/interfaces`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces" \
   -H "Authorization: Bearer $token"
```