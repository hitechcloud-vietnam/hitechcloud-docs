# Get Domain EPP Code

Retrieve the EPP code for a domain.

### HTTP Request
```
GET /domain/@id/epp
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/epp" \
   -H "Authorization: Bearer $token"
```
