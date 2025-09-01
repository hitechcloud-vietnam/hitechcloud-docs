# Remove Network Interface

Remove a network interface from a virtual machine.

### HTTP Request
```
DELETE /service/@id/vms/@vmid/interfaces/@iface
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | int    | Virtual machine ID  |
| iface     | string | Interface name or ID|

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces/@iface" \
   -H "Authorization: Bearer $token"
```
