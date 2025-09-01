# Update Domain Nameservers

Change the nameservers of a domain. If `nameservers` is left empty, default nameservers will be used.

### HTTP Request
```
PUT /domain/@id/ns
```

### Query Parameters
| Parameter    | Type   | Description             |
|--------------|--------|-------------------------|
| id           | int    | Domain ID               |
| nameservers  | array  | List of nameservers     |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"nameservers\": ["ns1.example.com", "ns2.example.com"]
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/ns" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "info": [
        "success_changes_save"
    ]
}
```
