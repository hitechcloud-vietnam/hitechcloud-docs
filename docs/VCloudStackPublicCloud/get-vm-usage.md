---
id: get-vm-usage
title: Get VM Usage
---

## Get VM Usage

Retrieve the usage details of a specific virtual server.

### HTTP Request

`GET /service/@id/vms/@vmid/usage`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/usage" \
   -H "Authorization: Bearer $token"
```