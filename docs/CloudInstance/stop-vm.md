---
id: stop-vm
title: Stop VM
---

## Stop VM

Stop a virtual server.

### HTTP Request

`POST /service/@id/vms/@vmid/stop`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/stop" \
   -H "Authorization: Bearer $token"
```