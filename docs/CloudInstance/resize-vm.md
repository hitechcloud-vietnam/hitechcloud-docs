---
id: resize-vm
title: Resize VM
---

## Resize VM

Edit the configuration of a virtual server.

### HTTP Request

`PUT /service/@id/vms/@vmid`

### Query Parameters

| Parameter   | Type   | Description                |
|-------------|--------|----------------------------|
| id          | int    | Service ID                |
| vmid        | string | Virtual server ID         |
| memory      | string | Amount of RAM memory in MB |
| cpu         | string | Amount of CPU cores       |
| cpu_share   | string | Share percentage of CPU   |

### Example Request

```bash
POST_DATA="{
    \"memory\": \"memoryValue\",
    \"cpu\": \"cpuValue\",
    \"cpu_share\": \"cpu_shareValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```