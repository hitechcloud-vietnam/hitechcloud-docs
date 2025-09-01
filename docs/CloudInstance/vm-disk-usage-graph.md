---
id: vm-disk-usage-graph
title: VM Disk Usage Graph
---

## VM Disk Usage Graph

Retrieve HTML code for embedding the disk usage graph of a virtual server.

### HTTP Request

`GET /service/@id/vms/@vmid/usage/disk`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/usage/disk" \
   -H "Authorization: Bearer $token"
```