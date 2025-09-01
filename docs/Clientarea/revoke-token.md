# Revoke Token

Invalidate authorization and refresh tokens. Pass the refresh token or call this method with a valid access token.

### HTTP Request
```
POST /revoke
```

### Query Parameters
| Parameter      | Type   | Description                  |
|----------------|--------|------------------------------|
| refresh_token  | string | Refresh token                |

```bash
POST_DATA="{
    \"refresh_token\": \"refresh_tokenValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/revoke" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "status": true
}
```
