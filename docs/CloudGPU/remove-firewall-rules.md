# Remove Firewall Rules

Remove firewall rules from a virtual server.

### HTTP Request
```
DELETE /service/@id/vms/firewall/@position
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| position  | string | Rule position       |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/vms/firewall/@position"
```
