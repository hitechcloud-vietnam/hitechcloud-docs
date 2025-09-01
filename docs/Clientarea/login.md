# Login

Generate a new authorization token.

### HTTP Request
```
POST /login
```

### Query Parameters
| Parameter | Type   | Description                  |
|-----------|--------|------------------------------|
| username  | string | Your account email address   |
| password  | string | Account password             |

```bash
POST_DATA="{
    \"username\": \"user@example.com\",
    \"password\": \"secret\"
}"

curl -X POST "https://my.photuesoftware.vn/api/login" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRw(...)5lZ9T79ft9uwOkqRRmIBbtR51_w",
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIzMD(...)ChwIAb3zvxBu6kvULa2AwAt9U-I"
}
```
