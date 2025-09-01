# Run Diagnostics

Start a new diagnostics operation.

### HTTP Request
```
POST /service/@id/diag
```

### Query Parameters
| Parameter     | Type   | Description                     |
|---------------|--------|---------------------------------|
| id            | int    | Service ID                      |
| template      | string | Diagnostic Template ID          |
| clearhdd      | bool   | Clear disks                     |
| fullhddclear  | bool   | Full hard drive erase (requires `clearhdd` set to True) |

```bash
POST_DATA="{
    \"template\": \"templateValue\",
    \"clearhdd\": \"clearhddValue\",
    \"fullhddclear\": \"fullhddclearValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/diag" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
