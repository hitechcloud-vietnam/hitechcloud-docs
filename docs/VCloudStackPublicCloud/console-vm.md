---
id: console-vm
title: Console VM
---

## Console VM

Retrieve the console details for a virtual server.

### HTTP Request

`GET /service/@id/vms/@vmid/console`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/console" \
   -H "Authorization: Bearer $token"
```