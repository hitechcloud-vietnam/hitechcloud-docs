# Bandwidth Usage

Return bandwidth usage and billing details.

### HTTP Request
```
GET /service/@id/bandwidth
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/bandwidth" \
   -H "Authorization: Bearer $token"
```
