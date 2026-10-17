# Yêu cầu nâng cấp

Ước tính hoặc yêu cầu nâng cấp cho máy chủ ảo.

### Yêu cầu HTTP
```
POST /service/@id/upgrade
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token"
```
