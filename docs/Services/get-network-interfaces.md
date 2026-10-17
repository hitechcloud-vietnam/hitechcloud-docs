# Lấy giao diện mạng

Lấy thông tin chi tiết của một giao diện mạng cụ thể.

### Yêu cầu HTTP
```
GET /service/@id/vms/@vmid/interfaces/@iface
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |
| iface | string | Tên hoặc ID giao diện |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces/@iface" \
   -H "Authorization: Bearer $token"
```
