---
id: remove-ip-from-vm
title: Remove IP from VM
---

## Remove IP from VM

Unassign an IP from a virtual server.

### HTTP Request

`DELETE /service/@id/vms/@vmid/ips/@ipid`

### Query Parameters

| Parameter    | Type   | Description          |
|--------------|--------|----------------------|
| id           | int    | Service ID          |
| vmid         | string | Virtual server ID   |
| ipid         | string | IP Address ID       |
| interfaceid  | string | Network interface ID |

### Example Request

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ips/@ipid" \
   -H "Authorization: Bearer $token"
```