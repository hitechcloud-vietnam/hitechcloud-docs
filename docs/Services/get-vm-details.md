# Get VM Details

Retrieve details of a specific virtual machine.

### HTTP Request
```
GET /service/@id/vms/@vmid
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | string | Virtual machine ID  |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token"
```
