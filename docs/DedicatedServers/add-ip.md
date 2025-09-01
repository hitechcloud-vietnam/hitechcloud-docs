# Add IP

Add a new IP to a server.

### HTTP Request
```
POST /service/@id/ips
```

### Query Parameters
| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| id        | int    | Service ID                      |
| vlan      | string | VLAN ID                         |
| domain    | string | IP Domain                       |
| num       | string | Number of IPs to add (optional) |

```bash
POST_DATA="{
    \"vlan\": \"vlanValue\",
    \"domain\": \"domainValue\",
    \"num\": \"numValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/ips" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
