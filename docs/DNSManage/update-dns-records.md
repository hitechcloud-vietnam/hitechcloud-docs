# Update DNS Records

Change a DNS record.

### HTTP Request
```
PUT /domain/@id/dns/@index
```

### Query Parameters
| Parameter  | Type   | Description          |
|------------|--------|----------------------|
| id         | int    | Domain ID            |
| record_id  | int    | Record index         |
| name       | string | Record name          |
| type       | string | Record type          |
| priority   | string | Record priority      |
| content    | string | Record content (e.g., IP address for A records) |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"record_id\": \"record_idValue\",
    \"name\": \"nameValue\",
    \"type\": \"typeValue\",
    \"priority\": \"priorityValue\",
    \"content\": \"contentValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/dns/@index" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "info": [
        "DNS Management updated successfully"
    ]
}
```
