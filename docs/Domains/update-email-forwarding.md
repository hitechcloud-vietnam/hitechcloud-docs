# Update Email Forwarding

Update email forwarding settings for a domain.

### HTTP Request
```
PUT /domain/@id/emforwarding
```

### Query Parameters
| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| id        | int    | Domain ID                       |
| from      | string | Email address to forward from   |
| to        | string | Email address to forward to     |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"from\": \"info@domain.com\",
    \"to\": \"destination@domain.com\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/emforwarding" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
