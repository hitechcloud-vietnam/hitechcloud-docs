# Tắt máy ảo

Tắt máy ảo một cách an toàn (graceful shutdown).

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/shutdown
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy ảo |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/shutdown" \
   -H "Authorization: Bearer $token"
```
