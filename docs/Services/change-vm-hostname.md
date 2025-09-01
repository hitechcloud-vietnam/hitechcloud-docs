# Change VM Hostname

Update the hostname of a virtual machine.

### HTTP Request
```
POST /service/@id/vms/@vmid/hostname
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | int    | Virtual machine ID  |
| hostname  | string | New hostname        |

```bash
POST_DATA="{
    \"hostname\": \"hostnameValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/hostname" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
