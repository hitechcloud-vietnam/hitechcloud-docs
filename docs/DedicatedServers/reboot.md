# Reboot

Request a server reboot.

### HTTP Request
```
POST /service/@id/reboot
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/reboot" \
   -H "Authorization: Bearer $token"
```
