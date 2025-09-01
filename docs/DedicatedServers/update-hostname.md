# Update Hostname

Update the hostname of a server.

### HTTP Request
```
POST /service/@id/hostname
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| hostname  | string | New hostname        |

```bash
POST_DATA="{
    \"hostname\": \"hostnameValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/hostname" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
