# Add Firewall Rules

Add firewall rules to a virtual server.

### HTTP Request
```
POST /service/@id/vms/firewall
```

### Query Parameters
| Parameter       | Type   | Description                             |
|-----------------|--------|-----------------------------------------|
| id              | int    | Service ID                             |
| action          | string | accept or drop                         |
| type            | string | source, destination, or both           |
| comment         | string | Freeform comment string (0-250 chars)  |
| protocol        | string | tcp, udp, or icmp                      |
| address_start   | string | Valid IP address                       |
| address_end     | string | Valid IP address                       |
| port_start      | string | Port range start (1-65535)             |
| port_end        | string | Port range end (1-65535)               |

```bash
POST_DATA="{
    \"action\": \"actionValue\",
    \"type\": \"typeValue\",
    \"comment\": \"commentValue\",
    \"protocol\": \"protocolValue\",
    \"address_start\": \"address_startValue\",
    \"address_end\": \"address_endValue\",
    \"port_start\": \"port_startValue\",
    \"port_end\": \"port_endValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/firewall" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

