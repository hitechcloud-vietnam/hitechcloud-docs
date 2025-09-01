# Cancel Rescue

Cancel a rescue operation.


### HTTP Request
```
POST /service/@id/rescue/cancel
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/rescue/cancel" \
   -H "Authorization: Bearer $token"
```
