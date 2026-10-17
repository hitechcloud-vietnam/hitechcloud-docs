# Trạng thái chẩn đoán

Hiển thị trạng thái của một thao tác chẩn đoán.

### Yêu cầu HTTP
```
GET /service/@id/diag
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/diag" \
   -H "Authorization: Bearer $token"
```
