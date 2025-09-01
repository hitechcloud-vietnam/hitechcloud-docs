---
id: get-vm-details
title: Get VM Details
---

## Get VM Details

Retrieve the details of a specific virtual machine.

### HTTP Request

`GET /service/@id/vms/@vmid`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token"
```
