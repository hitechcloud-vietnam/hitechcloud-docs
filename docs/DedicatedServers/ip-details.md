# Chi tiết IP

Lấy thông tin chi tiết về một IP.

### Yêu cầu HTTP
```
GET /service/@id/ips/@ip
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| ip | string | ID địa chỉ IP |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/ips/@ip" \
   -H "Authorization: Bearer $token"
```
