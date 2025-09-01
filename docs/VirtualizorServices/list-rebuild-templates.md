# List Rebuild Templates

List templates available for rebuilding a virtual server.

### HTTP Request
```
GET /service/@id/vms/@vmid/rebuild
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | int    | Virtual machine ID  |
| template  | string | Template ID         |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rebuild" \
   -H "Authorization: Bearer $token"
```
