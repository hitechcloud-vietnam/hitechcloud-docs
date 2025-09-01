# Get Server State

Return details about the server's power state.


### HTTP Request
```
GET /service/@id/status
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/status" \
   -H "Authorization: Bearer $token"
```
