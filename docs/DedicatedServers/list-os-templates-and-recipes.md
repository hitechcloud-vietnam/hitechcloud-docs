# Danh sách mẫu hệ điều hành và công thức cấu hình

Liệt kê các mẫu có thể cài đặt lên máy chủ và các công thức cấu hình bổ sung.


### Yêu cầu HTTP
```
GET /service/@id/reinstall/templates
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/reinstall/templates" \
   -H "Authorization: Bearer $token"
```
