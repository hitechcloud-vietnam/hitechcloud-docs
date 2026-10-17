# Danh sách máy ảo

Liệt kê các máy chủ ảo thuộc một dịch vụ.

### Yêu cầu HTTP
```
GET /service/@id/vms
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token"
```
