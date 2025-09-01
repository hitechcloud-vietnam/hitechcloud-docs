# Change SSH Key

Add SSH keys to a virtual server.

### HTTP Request
```
POST /service/@id/vms/@vmid/addsshkey
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | string | Virtual machine ID  |
| keys      | array  | SSH Key IDs         |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/addsshkey" \
   -H "Authorization: Bearer $token"
```
