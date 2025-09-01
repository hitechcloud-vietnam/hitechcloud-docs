# Rescue

Start a rescue operation on a server.

### HTTP Request
```
POST /service/@id/rescue
```

### Query Parameters
| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| id        | int    | Service ID                      |
| template  | string | Rescue Template ID              |
| password  | string | Password for rescue operation   |

```bash
POST_DATA="{
    \"template\": \"templateValue\",
    \"password\": \"passwordValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/rescue" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
