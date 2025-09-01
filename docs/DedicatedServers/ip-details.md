# IP Details

Get details about an IP.

### HTTP Request
```
GET /service/@id/ips/@ip
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| ip        | string | IP Address ID       |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/ips/@ip" \
   -H "Authorization: Bearer $token"
```
