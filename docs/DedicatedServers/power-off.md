# Power OFF

Power off a server.

### HTTP Request
```
POST /service/@id/poweroff
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/poweroff" \
   -H "Authorization: Bearer $token"
```
