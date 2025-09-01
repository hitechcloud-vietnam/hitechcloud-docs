---
id: reboot-vm
title: Reboot VM
---

## Reboot VM

Reboot a virtual server, optionally specifying an ISO image to boot from.

### HTTP Request

`POST /service/@id/vms/@vmid/reboot`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |
| iso       | string | Optional ISO image to boot from |

### Example Request

```bash
POST_DATA="{
    \"iso\": \"isoValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/reboot" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```