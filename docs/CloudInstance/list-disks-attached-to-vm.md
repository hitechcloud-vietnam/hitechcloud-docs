---
id: list-disks-attached-to-vm
title: List Disks Attached to VM
---

## List Disks Attached to VM

Retrieve the list of disks available for a specific virtual server.

### HTTP Request

`GET /service/@id/vms/@vmid/storage`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/storage" \
   -H "Authorization: Bearer $token"
```