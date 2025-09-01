# Bandwidth Graph

Return base64 encoded images representing bandwidth usage for the last day, week, and month.

### HTTP Request
```
GET /service/@id/bandwidth-graphs
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/bandwidth-graphs" \
   -H "Authorization: Bearer $token"
```
