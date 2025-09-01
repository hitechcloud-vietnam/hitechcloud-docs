# Upgrade Request

Estimate or request an upgrade for a virtual server.

### HTTP Request
```
POST /service/@id/upgrade
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token"
```
