# Get Domain Nameservers

Retrieve the nameservers of a domain.

### HTTP Request
```
GET /domain/@id/ns
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/ns" \
   -H "Authorization: Bearer $token"
```
