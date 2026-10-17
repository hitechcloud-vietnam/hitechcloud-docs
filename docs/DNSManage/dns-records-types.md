# Các loại bản ghi DNS

Liệt kê các loại bản ghi DNS được hỗ trợ.

### Yêu cầu HTTP
```
GET /domain/@id/dns/types
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID tên miền |

```bash
curl -X GET "https://my.photuesoftware.vn/api/domain/@id/dns/types" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "types": [
        "A",
        "CNAME",
        "URL",
        "FRAME",
        "MX",
        "MXE",
        "TXT"
    ]
}
```
