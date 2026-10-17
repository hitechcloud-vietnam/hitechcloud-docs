# Danh sách mẫu cài lại

Liệt kê các mẫu có thể dùng để cài lại máy chủ ảo.

### Yêu cầu HTTP
```
GET /service/@id/vms/@vmid/rebuild
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |
| template | string | ID mẫu |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rebuild" \
   -H "Authorization: Bearer $token"
```
