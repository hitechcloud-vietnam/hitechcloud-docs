---
id: list-vm-rebuild-templates
title: List VM Rebuild Templates
---

## List VM Rebuild Templates

Retrieve templates that can be used to rebuild a virtual server.

### HTTP Request

`GET /service/@id/templates/@vmid`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/templates/@vmid" \
   -H "Authorization: Bearer $token"
```