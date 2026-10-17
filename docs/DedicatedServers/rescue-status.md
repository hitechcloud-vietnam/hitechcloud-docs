# Trạng thái cứu hộ

Hiển thị trạng thái của thao tác cứu hộ.

### Yêu cầu HTTP
```
GET /service/@id/rescue
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/rescue" \
   -H "Authorization: Bearer $token"
```
