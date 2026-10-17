# Xóa IP

Xóa một IP khỏi máy chủ.

### Yêu cầu HTTP
```
DELETE /service/@id/ips/@ip
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| ip | string | ID địa chỉ IP |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/ips/@ip"
```
