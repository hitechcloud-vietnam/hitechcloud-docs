# Get Domain Auto-Renew

Retrieve the auto-renew status of a domain.

### HTTP Request
```
GET /domain/@id/autorenew
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/autorenew" \
   -H "Authorization: Bearer $token"
```
