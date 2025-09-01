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
| template        | string | Template ID                         |
| flavor          | string | Flavor describing VM CPU and memory |
| disk            | string | Disk space in GB                    |
| security_group  | string | Network security group              |
| keypair         | string | SSH key name                        |
| password        | string | Password for root user              |

### Example Request

```bash
POST_DATA="{
    \"label\": \"labelValue\",
    \"template\": \"templateValue\",
    \"flavor\": \"flavorValue\",
    \"disk\": \"diskValue\",
    \"security_group\": \"security_groupValue\",
    \"keypair\": \"keypairValue\",
    \"password\": \"passwordValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```