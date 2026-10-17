# DNS ngược

Lấy các bản ghi DNS ngược cho các địa chỉ IP của dịch vụ.

### Yêu cầu HTTP
```
GET /service/@id/rdns
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/rdns" \
   -H "Authorization: Bearer $token"
```
