---
id: assign-ip-to-vm
title: Assign IP to VM
---

## Assign IP to VM

Add a new IP to a virtual server.

### HTTP Request

`POST /service/@id/vms/@vmid/ips`

### Query Parameters

| Parameter    | Type   | Description          |
|--------------|--------|----------------------|
| id           | int    | Service ID          |
| vmid         | string | Virtual server ID   |
| ipid         | string | IP Address ID       |
| interfaceid  | string | Network interface ID |

### Example Request

```bash
POST_DATA="{
    \"ipid\": \"ipidValue\",
    \"interfaceid\": \"interfaceidValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ips" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```