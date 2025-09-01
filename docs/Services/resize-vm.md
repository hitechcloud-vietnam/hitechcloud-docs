# Resize VM

Modify the resources of a virtual machine.

### HTTP Request
```
PUT /service/@id/vms/@vmid
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | string | Virtual machine ID  |
| memory    | string | RAM in MB           |
| cpu       | string | CPU cores           |

```bash
POST_DATA="{
    \"memory\": \"memoryValue\",
    \"cpu\": \"cpuValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
