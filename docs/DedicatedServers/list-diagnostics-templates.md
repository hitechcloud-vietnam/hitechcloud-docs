# Danh sách mẫu chẩn đoán

Liệt kê các mẫu có thể dùng cho thao tác chẩn đoán.


### Yêu cầu HTTP
```
GET /service/@id/diag/templates
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/diag/templates" \
   -H "Authorization: Bearer $token"
```
