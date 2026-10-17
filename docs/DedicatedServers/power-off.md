# Tắt nguồn

Tắt nguồn máy chủ.

### Yêu cầu HTTP
```
POST /service/@id/poweroff
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/poweroff" \
   -H "Authorization: Bearer $token"
```
