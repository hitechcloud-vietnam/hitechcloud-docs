# Domain Details

Get details of a specific domain.

### HTTP Request
```
GET /domain/@id
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Domain ID   |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "details": {
        "id": "47",
        "name": "testname.com",
        "date_created": "2016-12-30",
        "firstpayment": "10.00",
        "recurring_amount": "15.00",
        "period": "1",
        "expires": "2017-12-30",
        "status": "Active",
        "next_due": "2017-12-30",
        "next_invoice": "2017-11-30",
        "idprotection": "0",
        "nameservers": [
            "ns1.example.com",
            "ns2.example.com",
            "ns3.example.com",
            "ns4.example.com"
        ],
        "autorenew": "1"
    }
}
```
