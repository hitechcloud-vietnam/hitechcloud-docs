# Create DNS Records

Add a new DNS record.

### HTTP Request
```
POST /domain/@id/dns
```

### Query Parameters
| Parameter | Type   | Description          |
|-----------|--------|----------------------|
| id        | int    | Domain ID            |
| name      | string | Record name          |
| type      | string | Record type          |
| priority  | string | Record priority      |
| content   | string | Record content (e.g., IP address for A records) |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"name\": \"nameValue\",
    \"type\": \"typeValue\",
    \"priority\": \"priorityValue\",
    \"content\": \"contentValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/@id/dns" \
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
