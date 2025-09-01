# Assign IPs

Assign a new IP to a network interface.

### HTTP Request
```
POST /service/@id/vms/@vmid/ippool/@pool
```

### Query Parameters
| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| id        | int    | Service ID                      |
| vmid      | int    | Virtual machine ID              |
| pool      | string | List ID to allocate new IP from |
| type      | string | IPv4 or IPv6                    |
| iface     | int    | Interface number                |

```bash
POST_DATA="{
    \"type\": \"typeValue\",
    \"iface\": \"ifaceValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ippool/@pool" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
