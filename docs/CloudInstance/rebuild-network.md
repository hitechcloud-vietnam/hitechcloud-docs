---
id: rebuild-network
title: Rebuild Network
---

## Rebuild Network

Rebuild the network for a virtual server.

### HTTP Request

`POST /service/@id/vms/@vmid/rebuild_network`

### Query Parameters

| Parameter       | Type   | Description       |
|-----------------|--------|-------------------|
| id              | int    | Service ID        |
| vmid            | string | Virtual server ID |
| shutdown_type   | string | Shutdown type     |
| force           | bool   | Force reboot      |
| startup         | bool   | Required startup  |

### Example Request

```bash
POST_DATA="{
    \"shutdown_type\": \"shutdown_typeValue\",
    \"force\": \"forceValue\",
    \"startup\": \"startupValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rebuild_network" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```