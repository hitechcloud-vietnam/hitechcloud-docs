# Rescue Status

Show the status of a rescue operation.

### HTTP Request
```
GET /service/@id/rescue
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/rescue" \
   -H "Authorization: Bearer $token"
```
