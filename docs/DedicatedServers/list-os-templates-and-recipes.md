# List OS Templates and Recipes

Lists templates that can be installed on a server and recipes for additional configuration.


### HTTP Request
```
GET /service/@id/reinstall/templates
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/reinstall/templates" \
   -H "Authorization: Bearer $token"
```
