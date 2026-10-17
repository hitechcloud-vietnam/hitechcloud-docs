# Khởi động máy ảo

Khởi động máy ảo.

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/start
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy ảo |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/start" \
   -H "Authorization: Bearer $token"
```
