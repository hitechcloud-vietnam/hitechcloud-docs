---
id: list-vms
title: List VMs
---

## List VMs

Retrieve a list of virtual machines.

### HTTP Request

`GET /service/@id/vms`

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token"
```