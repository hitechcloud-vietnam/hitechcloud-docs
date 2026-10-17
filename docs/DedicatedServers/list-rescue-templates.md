# Danh sách mẫu cứu hộ

Liệt kê các mẫu có thể dùng cho thao tác cứu hộ.


### Yêu cầu HTTP
```
GET /service/@id/rescue/templates
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/rescue/templates" \
   -H "Authorization: Bearer $token"
```
