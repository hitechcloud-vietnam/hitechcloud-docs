---
id: create-vm
title: Create VM
---

## Create VM

Add a new virtual server.

### HTTP Request

`POST /service/@id/vms`

### Query Parameters

| Parameter       | Type   | Description                          |
|-----------------|--------|--------------------------------------|
| id              | int    | Service ID                          |
| label           | string | VM label                            |
| template_id     | string | Template ID                         |
| password        | string | Initial root password               |
| memory          | string | Amount of RAM memory in MB          |
| cpu             | string | Amount of CPU cores                 |
| cpu_share       | string | Share percentage of CPU             |
| disk            | string | Disk Space in GB                    |
| swap            | string | Swap Space in GB                    |
| note            | string | Custom note                         |
| license_key     | string | Type of OS license (required for Windows VMs) |
| license_type    | string | The key of a license (if own licensing type) |

### Example Request

```bash
POST_DATA="{
    \"label\": \"labelValue\",
    \"template_id\": \"template_idValue\",
    \"password\": \"passwordValue\",
    \"memory\": \"memoryValue\",
    \"cpu\": \"cpuValue\",
    \"cpu_share\": \"cpu_shareValue\",
    \"disk\": \"diskValue\",
    \"swap\": \"swapValue\",
    \"note\": \"noteValue\",
    \"license_key\": \"license_keyValue\",
    \"license_type\": \"license_typeValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```