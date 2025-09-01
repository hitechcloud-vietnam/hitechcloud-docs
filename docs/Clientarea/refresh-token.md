# Refresh Token

Generate a new authorization token using the refresh token.


### HTTP Request
```
POST /token
```

### Query Parameters
| Parameter      | Type   | Description                  |
|----------------|--------|------------------------------|
| refresh_token  | string | Refresh token previously obtained from POST /login |

```bash
POST_DATA="{
    \"refresh_token\": \"refresh_tokenValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHR(...)vY2xlYiHGvauCWZD9B0VwXgHEzXDllqY",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJBQ(...)Rmivc_u3YA_kgDqOPtUuGNXOzueXYtZw"
}
```
