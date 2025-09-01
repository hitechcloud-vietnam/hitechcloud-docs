# Destroy VM

Remove a virtual machine.

### HTTP Request
```
DELETE /service/@id/vms/@vmid
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | string | Virtual machine ID  |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token"
```
