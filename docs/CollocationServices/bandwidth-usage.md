# Mức sử dụng băng thông

Trả về mức sử dụng băng thông và chi tiết tính cước.

### Yêu cầu HTTP
```
GET /service/@id/bandwidth
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/bandwidth" \
   -H "Authorization: Bearer $token"
```
