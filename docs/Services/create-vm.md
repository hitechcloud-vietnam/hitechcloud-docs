# Create VM

Add a new virtual machine.

### HTTP Request
```
POST /service/@id/vms
```

### Query Parameters
| Parameter | Type   | Description             |
|-----------|--------|-------------------------|
| id        | int    | Service ID              |
| label     | string | VM label                |
| template  | string | Template ID             |
| memory    | string | RAM memory in MB        |
| cpu       | string | CPU cores               |
| disk      | string | Disk space in GB        |
| interface | array  | Interface configuration |

```bash
POST_DATA="{
    \"label\": \"labelValue\",
    \"template\": \"templateValue\",
    \"memory\": \"memoryValue\",
    \"cpu\": \"cpuValue\",
    \"disk\": \"diskValue\",
    \"interface\": \"interfaceValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
