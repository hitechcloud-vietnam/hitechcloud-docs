# Upgrade Request

Estimate or request an upgrade for a service.

### HTTP Request
```
POST /service/@id/upgrade
```

### Query Parameters
| Parameter   | Type   | Description                     |
|-------------|--------|---------------------------------|
| id          | int    | Service ID                     |
| resources   | array  | Resource values                |
| package     | int    | New package ID (optional)      |
| cycle       | string | New billing cycle (optional)   |
| send        | bool   | Send upgrade request           |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"resources\": "resourcesValue",
    \"package\": "packageValue",
    \"cycle\": "cycleValue",
    \"send\": "sendValue"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
