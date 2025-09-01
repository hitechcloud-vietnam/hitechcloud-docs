# Reset VM

Reset the power of a virtual machine.

### HTTP Request
```
POST /service/@id/vms/@vmid/reset
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | string | Virtual machine ID  |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/reset" \
   -H "Authorization: Bearer $token"
```
