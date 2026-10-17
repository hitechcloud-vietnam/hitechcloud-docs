# Xóa giao diện mạng

Xóa giao diện mạng khỏi máy ảo.

### Yêu cầu HTTP
```
DELETE /service/@id/vms/@vmid/interfaces/@iface
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |
| iface | string | Tên hoặc ID giao diện |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces/@iface" \
   -H "Authorization: Bearer $token"
```
