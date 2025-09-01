# Reverse DNS

Get reverse DNS entries for service's IP addresses.

### HTTP Request
```
GET /service/@id/rdns
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/rdns" \
   -H "Authorization: Bearer $token"
```
