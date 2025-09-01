# Update Network Interfaces

Update details of a network interface.

### HTTP Request
```
PUT /service/@id/vms/@vmid/interfaces/@iface
```

### Query Parameters
| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| id        | int    | Service ID                      |
| vmid      | int    | Virtual machine ID              |
| iface     | int    | Interface number                |
| firewall  | int    | Enable or disable firewall      |
| ipv4      | int[]  | List of IPv4 IDs                |
| ipv6      | int[]  | List of IPv6 IDs                |

```bash
POST_DATA="{
    \"firewall\": \"firewallValue\",
    \"ipv4\": \"ipv4Value\",
    \"ipv6\": \"ipv6Value\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces/@iface" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
