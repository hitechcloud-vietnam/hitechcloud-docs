---
id: unrescue-vm
title: Unrescue VM
---

## Unrescue VM

Disable rescue mode for a virtual server.

### HTTP Request

`POST /service/@id/vms/@vmid/unrescue`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/unrescue" \
   -H "Authorization: Bearer $token"
```