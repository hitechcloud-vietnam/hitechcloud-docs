# Logout

Invalidate the authorization token.

### HTTP Request
```
POST /logout
```

```bash
curl -X POST "https://my.photuesoftware.vn/api/logout" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "status": true
}
```
