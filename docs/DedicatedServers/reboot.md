# Khởi động lại

Yêu cầu khởi động lại máy chủ.

### Yêu cầu HTTP
```
POST /service/@id/reboot
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/reboot" \
   -H "Authorization: Bearer $token"
```
