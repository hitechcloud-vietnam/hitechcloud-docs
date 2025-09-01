# Download Certificate

Retrieve X.509 certificate data.

### HTTP Request
```
GET /certificate/@id/crt
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/certificate/@id/crt" \
   -H "Authorization: Bearer $token"
```
