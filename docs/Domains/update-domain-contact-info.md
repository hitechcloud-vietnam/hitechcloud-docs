# Update Domain Contact Info

Update the contact information for a domain.

### HTTP Request
```
PUT /domain/@id/contact
```

### Query Parameters
| Parameter      | Type   | Description             |
|----------------|--------|-------------------------|
| id             | int    | Domain ID               |
| contact_info   | array  | Contact information     |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"contact_info\": "contact_infoValue"
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/contact" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "success": true,
    "domain_id": "428",
    "info": [
        "request_contacts_sent"
    ]
}
```
