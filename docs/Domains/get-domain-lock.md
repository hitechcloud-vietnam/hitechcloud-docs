# Get Domain Lock

Retrieve the lock status of a domain.

### HTTP Request
```
GET /domain/@id/reglock
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/reglock" \
   -H "Authorization: Bearer $token"
```
