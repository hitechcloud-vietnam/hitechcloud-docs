# Renew Domain

Create a new renew order for a domain.

### HTTP Request
```
POST /domain/@id/renew
```

### Query Parameters
| Parameter   | Type   | Description       |
|-------------|--------|-------------------|
| years       | string | Number of years   |
| pay_method  | int    | Payment method ID |

```bash
POST_DATA="{
    \"years\": \"yearsValue\",
    \"pay_method\": \"pay_methodValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/@id/renew" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
