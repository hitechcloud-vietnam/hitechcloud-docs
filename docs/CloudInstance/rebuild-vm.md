---
id: rebuild-vm
title: Rebuild VM
---

## Rebuild VM

Rebuild a virtual server using a specified template.

### HTTP Request

`POST /service/@id/vms/@vmid/rebuild`

### Query Parameters

| Parameter     | Type   | Description                          |
|---------------|--------|--------------------------------------|
| id            | int    | Service ID                          |
| vmid          | string | Virtual server ID                   |
| template      | string | Template ID                         |
| license_key   | string | Type of OS license (required for Windows VMs) |
| license_type  | string | The key of a license (if own licensing type) |

### Example Request

```bash
POST_DATA="{
    \"template\": \"templateValue\",
    \"license_key\": \"license_keyValue\",
    \"license_type\": \"license_typeValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rebuild" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```