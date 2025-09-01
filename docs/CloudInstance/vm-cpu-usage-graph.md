---
id: vm-cpu-usage-graph
title: VM CPU Usage Graph
---

## VM CPU Usage Graph

Retrieve HTML code for embedding the CPU usage graph of a virtual server.

### HTTP Request

`GET /service/@id/vms/@vmid/usage/cpu`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/usage/cpu" \
   -H "Authorization: Bearer $token"
```