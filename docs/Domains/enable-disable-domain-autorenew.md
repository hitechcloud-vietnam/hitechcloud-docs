# Enable/Disable Domain Auto-Renew

Enable or disable the auto-renew status of a domain.

### HTTP Request
```
PUT /domain/@id/autorenew
```

### Query Parameters
| Parameter   | Type  | Description                     |
|-------------|-------|---------------------------------|
| id          | int   | Domain ID                       |
| autorenew   | bool  | Enable or disable auto-renew    |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"autorenew\": true
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/autorenew" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
