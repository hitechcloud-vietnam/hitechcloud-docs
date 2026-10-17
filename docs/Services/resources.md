# Tài nguyên

Hiển thị tài nguyên khả dụng và đã sử dụng của một dịch vụ.

### Yêu cầu HTTP
```
GET /service/@id/resources
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/resources" \
   -H "Authorization: Bearer $token"
```
