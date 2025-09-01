# Update Domain Forwarding

Update domain forwarding settings.

### HTTP Request
```
PUT /domain/@id/forwarding
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
POST_DATA="{
    \"id\": \"idValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/forwarding" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
