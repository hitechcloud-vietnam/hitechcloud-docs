# Lấy trạng thái máy chủ

Trả về thông tin về trạng thái nguồn của máy chủ.


### Yêu cầu HTTP
```
GET /service/@id/status
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/status" \
   -H "Authorization: Bearer $token"
```
