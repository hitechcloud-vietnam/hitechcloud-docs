---
id: reboot-vm
title: Reboot VM
---

## Reboot VM

Reboot a virtual server.

### HTTP Request

`POST /service/@id/vms/@vmid/reboot`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/reboot" \
   -H "Authorization: Bearer $token"
```