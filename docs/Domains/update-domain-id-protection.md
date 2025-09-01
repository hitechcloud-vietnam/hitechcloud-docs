# Update Domain ID Protection

Enable or disable ID protection for a domain.

### HTTP Request
```
PUT /domain/@id/idprotection
```

### Query Parameters
| Parameter | Type  | Description                     |
|-----------|-------|---------------------------------|
| id        | int   | Domain ID                       |
| switch    | bool  | Enable or disable ID protection |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"switch\": true
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/idprotection" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
