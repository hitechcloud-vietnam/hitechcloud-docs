# Tải chứng chỉ

Lấy dữ liệu chứng chỉ X.509.

### Yêu cầu HTTP
```
GET /certificate/@id/crt
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/certificate/@id/crt" \
   -H "Authorization: Bearer $token"
```
