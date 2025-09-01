---
id: reverse-dns
title: Reverse DNS
---

## Reverse DNS

Retrieve reverse DNS entries for VM IP addresses.

### HTTP Request

`GET /service/@id/vms/@vmid/rdns`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rdns" \
   -H "Authorization: Bearer $token"
```