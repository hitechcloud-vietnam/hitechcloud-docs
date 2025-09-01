# Remove DNS Records

Remove a DNS record.

### HTTP Request
```
DELETE /domain/@id/dns/@index
```

### Query Parameters
| Parameter  | Type   | Description          |
|------------|--------|----------------------|
| id         | int    | Domain ID            |
| record_id  | int    | Record index         |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/domain/@id/dns/@index" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "info": [
        "DNS Management updated successfully"
    ]
}
```
