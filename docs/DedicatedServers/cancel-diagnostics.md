# Cancel Diagnostics

Cancel a diagnostics operation.


### HTTP Request
```
POST /service/@id/diag/cancel
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/diag/cancel" \
   -H "Authorization: Bearer $token"
```
