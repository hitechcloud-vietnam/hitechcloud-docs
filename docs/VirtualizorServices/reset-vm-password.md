# Đặt lại mật khẩu máy ảo

Đặt lại mật khẩu root của máy chủ ảo.

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/resetpwd
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy ảo |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/resetpwd" \
   -H "Authorization: Bearer $token"
```
