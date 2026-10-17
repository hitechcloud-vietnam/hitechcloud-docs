# Bật nguồn

Bật nguồn máy chủ.

### Yêu cầu HTTP
```
POST /service/@id/poweron
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/poweron" \
   -H "Authorization: Bearer $token"
```
