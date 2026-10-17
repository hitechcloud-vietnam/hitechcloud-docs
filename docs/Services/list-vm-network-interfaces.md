# Danh sách giao diện mạng của máy ảo

Lấy các giao diện mạng đã gán cho máy chủ ảo.

### Yêu cầu HTTP
```
GET /service/@id/vms/@vmid/interfaces
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces" \
   -H "Authorization: Bearer $token"
```
