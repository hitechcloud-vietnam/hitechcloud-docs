# Rebuild VM

Rebuild a virtual machine using a specified template.

### HTTP Request
```
POST /service/@id/vms/@vmid/rebuild
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| vmid      | int    | Virtual machine ID  |
| template  | string | Template ID         |

```bash
POST_DATA="{
    \"template\": \"templateValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rebuild" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
