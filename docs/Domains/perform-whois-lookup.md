# Perform WHOIS Lookup

Perform a WHOIS lookup for a given domain.

### HTTP Request
```
GET /whoislookup/@domain
```

### Query Parameters
| Parameter | Type   | Description       |
|-----------|--------|-------------------|
| domain    | string | Domain name       |

```bash
curl -X GET "https://my.photuesoftware.vn/api/whoislookup/@domain" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
  "code": "0",
  "totalQuery": 0,
  "domainName": "hitechcloud.vn",
  "registrar": "Công ty TNHH phần mềm Nhân Hòa",
  "nameServer": [
    "ns1.photuesoftware.vn",
    "ns2.photuesoftware.vn"
  ],
  "status": [
    "clientTransferProhibited"
  ],
  "creationDate": "02-11-2024",
  "expirationDate": "02-11-2025",
  "registrantName": "Công ty Cổ Phần Giải Pháp Công Nghệ và Phần Mềm Phổ Tuệ",
  "DNSSEC": "unsigned",
  "rawtext": "..."
}
```
