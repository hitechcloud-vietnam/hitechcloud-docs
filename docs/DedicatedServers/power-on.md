# Power ON

Power on a server.

### HTTP Request
```
POST /service/@id/poweron
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/poweron" \
   -H "Authorization: Bearer $token"
```
