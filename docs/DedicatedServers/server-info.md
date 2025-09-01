# Server Info

Get server hardware and OS details.

### HTTP Request
```
GET /service/@id/info
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/info" \
   -H "Authorization: Bearer $token"
```
