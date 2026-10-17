# Hủy chế độ cứu hộ

Hủy một thao tác cứu hộ.


### Yêu cầu HTTP
```
POST /service/@id/rescue/cancel
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/rescue/cancel" \
   -H "Authorization: Bearer $token"
```
