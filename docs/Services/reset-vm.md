# Đặt lại máy ảo

Đặt lại nguồn của máy ảo.

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/reset
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy ảo |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/reset" \
   -H "Authorization: Bearer $token"
```
