# Update rDNS

Update reverse DNS entries for service's IP addresses.

### HTTP Request
```
POST /service/@id/rdns
```

### Query Parameters
| Parameter   | Type   | Description |
|-------------|--------|-------------|
| id          | int    | Service ID  |
| ipaddress   | array  | IP address  |

```bash
POST_DATA="{
    \"ipaddress\": \"ipaddressValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/rdns" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
