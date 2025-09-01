# Additional Data for TLD

Get additional forms required for some TLDs.

### HTTP Request
```
GET /domain/order/@id/form
```

### Query Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| tld_id    | int  | TLD ID      |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/order/@id/form" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
    "forms": [
        {
            "type": "domaindnssupport",
            "title": "DNS Management",
            "id": "1424",
            "firstItemId": 9067,
            "description": "",
            "name": "custom[1424][9067]",
            "required": false,
            "multiple": false,
            "config": {
                "enableddefault": 0
            },
            "value": [],
            "textvalue": [],
            "price": 0,
            "recurring_price": 0,
            "setup": 0,
            "prorata_date": null,
            "items": [
                {
                    "title": "",
                    "value": 1,
                    "id": 9067,
                    "price": 4,
                    "setup": 0,
                    "selected": false
                }
            ]
        }
    ]
}
```
