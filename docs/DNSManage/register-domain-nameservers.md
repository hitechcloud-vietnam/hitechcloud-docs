# Register Domain Nameservers

Register domain nameservers.

### HTTP Request
```
POST /domain/@id/reg
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
POST_DATA="{
    \"id\": \"idValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/@id/reg" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
