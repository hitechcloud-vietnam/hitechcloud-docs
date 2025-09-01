# Reinstall

Start a reinstall operation on a server.

### HTTP Request
```
POST /service/@id/reinstall
```

### Query Parameters
| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| id        | int    | Service ID                      |
| hostname  | string | New hostname for server         |
| template  | string | Template ID                     |
| recipe    | string | Recipe ID (optional)            |
| password  | string | New password (optional)         |

```bash
POST_DATA="{
    \"hostname\": \"hostnameValue\",
    \"template\": \"templateValue\",
    \"recipe\": \"recipeValue\",
    \"password\": \"passwordValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/reinstall" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
