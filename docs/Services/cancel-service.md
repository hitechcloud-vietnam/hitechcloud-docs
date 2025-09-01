# Cancel Service

Request cancellation for a service.

### HTTP Request
```
POST /service/@id/cancel
```

### Query Parameters
| Parameter   | Type   | Description                     |
|-------------|--------|---------------------------------|
| id          | int    | Service ID                     |
| immediate   | string | Terminate immediately or later |
| reason      | string | Reason for cancellation        |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"immediate\": "immediateValue",
    \"reason\": "reasonValue"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/cancel" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
