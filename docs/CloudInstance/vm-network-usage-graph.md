---
id: vm-network-usage-graph
title: VM Network Usage Graph
---

## VM Network Usage Graph

Retrieve HTML code for embedding the network usage graph of a virtual server.

### HTTP Request

`GET /service/@id/vms/@vmid/usage/net`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/usage/net" \
   -H "Authorization: Bearer $token"
```