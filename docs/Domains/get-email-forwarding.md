# Get Email Forwarding

Retrieve email forwarding settings for a domain.

### HTTP Request
```
GET /domain/@id/emforwarding
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/emforwarding" \
   -H "Authorization: Bearer $token"
```
