# Upgrade Request

Estimate or request an upgrade for a virtual server.


### HTTP Request
```
POST /service/@id/upgrade
```

### Query Parameters
| Parameter | Type   | Description                     |
|-----------|--------|---------------------------------|
| id        | int    | Service ID                      |
| resources | array  | Array with resource values      |
| package   | int    | New package ID (optional)       |
| cycle     | string | New billing cycle (optional)    |
| send      | bool   | Send upgrade request (optional) |

```bash
POST_DATA="{
    \"resources\": {
        \"key\": \"value\"
    },
    \"package\": \"packageValue\",
    \"cycle\": \"cycleValue\",
    \"send\": \"sendValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
