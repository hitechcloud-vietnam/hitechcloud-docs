# Danh sách IP

Liệt kê các IP của máy ảo.

### Yêu cầu HTTP
```
GET /service/@id/vms/@vmid/ips
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |
| type | string | IPv4 hoặc IPv6 |
| iface | int | Số thứ tự giao diện |
| bridge | string | Tên bridge |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ips" \
   -H "Authorization: Bearer $token"
```
