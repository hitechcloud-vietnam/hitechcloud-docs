# PDU Port State

Get the state of a PDU port/outlet.

### HTTP Request
```
GET /service/@id/pdu/@port
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID   |
| port      | int  | Port ID      |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/pdu/@port"
```
