---
id: rescue-vm
title: Rescue VM
---

## Rescue VM

Reboot a virtual server into rescue mode.

### HTTP Request

`POST /service/@id/vms/@vmid/rescue`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rescue" \
   -H "Authorization: Bearer $token"
```