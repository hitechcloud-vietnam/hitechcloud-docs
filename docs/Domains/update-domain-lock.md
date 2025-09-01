# Update Domain Lock

Enable or disable the lock status of a domain.

### HTTP Request
```
PUT /domain/@id/reglock
```

### Query Parameters
| Parameter | Type  | Description                     |
|-----------|-------|---------------------------------|
| id        | int   | Domain ID                       |
| switch    | bool  | Enable or disable domain lock   |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"switch\": true
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/reglock" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
