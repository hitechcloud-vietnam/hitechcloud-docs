# Delete IP

Remove an IP from a server.

### HTTP Request
```
DELETE /service/@id/ips/@ip
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| ip        | string | IP Address ID       |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/ips/@ip"
```
