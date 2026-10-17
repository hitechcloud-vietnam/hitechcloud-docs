# Bỏ tạm ngưng máy ảo

Bỏ tạm ngưng máy chủ ảo.

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/unsuspend
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy ảo |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/unsuspend" \
   -H "Authorization: Bearer $token"
```
