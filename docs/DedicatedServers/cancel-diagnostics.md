# Hủy chẩn đoán

Hủy một thao tác chẩn đoán.


### Yêu cầu HTTP
```
POST /service/@id/diag/cancel
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/diag/cancel" \
   -H "Authorization: Bearer $token"
```
