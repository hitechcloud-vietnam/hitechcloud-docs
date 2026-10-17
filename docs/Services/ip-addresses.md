# Địa chỉ IP

Liệt kê các địa chỉ IP của dịch vụ.

### Yêu cầu HTTP
```
GET /service/@id/ip
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/ip" \
   -H "Authorization: Bearer $token"
```
