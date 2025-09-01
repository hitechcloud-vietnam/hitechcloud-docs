# Set PDU Port Status

Set the state of a PDU port/outlet.


### HTTP Request
```
POST /service/@id/pdu/@port
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |
| port      | int  | Port ID      |
| power     | bool | Desired power state ('true' for ON, 'false' for OFF) |

```bash
POST_DATA="{
    \"power\": \"powerValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/pdu/@port" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
