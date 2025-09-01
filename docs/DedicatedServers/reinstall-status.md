# Reinstall Status

Get the status of a reinstall operation.

### HTTP Request
```
GET /service/@id/reinstall
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/reinstall" \
   -H "Authorization: Bearer $token"
```
