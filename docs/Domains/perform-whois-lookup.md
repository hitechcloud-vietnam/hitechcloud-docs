# Tra cứu WHOIS

Tra cứu WHOIS cho một tên miền.

### Yêu cầu HTTP
```
GET /whoislookup/@domain
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------|
| domain | string | Tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/whoislookup/@domain" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
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
