# Add Network Interface

Add a new network interface to a virtual machine.

### HTTP Request
```
POST /service/@id/vms/@vmid/interfaces
```

### Query Parameters
| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| id        | int    | Service ID                      |
| vmid      | int    | Virtual machine ID              |
| firewall  | int    | Enable or disable firewall      |
| ipv4      | int[]  | List of IPv4 IDs                |
| ipv6      | int[]  | List of IPv6 IDs                |

```bash
POST_DATA="{
    \"firewall\": \"firewallValue\",
    \"ipv4\": \"ipv4Value\",
    \"ipv6\": \"ipv6Value\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
