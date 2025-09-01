---
id: resize-disk-vm
title: Resize Disk VM
---

## Resize Disk VM

Change the disk size of a virtual server.

### HTTP Request

`PUT /service/@id/vms/@vmid/storage/@diskid`

### Query Parameters

| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| id        | int    | Service ID        |
| vmid      | string | Virtual server ID |
| diskid    | string | Disk ID           |
| size      | int    | Disk size in GB   |

### Example Request

```bash
POST_DATA="{
    \"size\": \"sizeValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/storage/@diskid" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```