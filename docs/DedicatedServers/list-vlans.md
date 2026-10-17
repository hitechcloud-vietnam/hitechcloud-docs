# Danh sách VLAN

Liệt kê các VLAN khả dụng.

### Yêu cầu HTTP
```
GET /service/@id/vlans
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/vlans" \
   -H "Authorization: Bearer $token"
```
