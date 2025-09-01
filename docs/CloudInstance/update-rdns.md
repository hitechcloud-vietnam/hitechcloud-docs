---
id: update-rdns
title: Update rDNS
---

## Update rDNS

Update reverse DNS entries for VM IP addresses.

### HTTP Request

`POST /service/@id/vms/@vmid/rdns`

### Query Parameters

| Parameter    | Type   | Description       |
|--------------|--------|-------------------|
| id           | int    | Service ID        |
| vmid         | string | Virtual server ID |
| ipaddress    | string | IP address and hostname mapping |

### Example Request

```bash
POST_DATA="{
    \"ipaddress\": \"192.168.10.15\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rdns" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```