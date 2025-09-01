---
id: destroy-vm
title: Destroy VM
---

## Destroy VM

Remove a virtual server.

### HTTP Request

`DELETE /service/@id/vms/@vmid`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token"
```