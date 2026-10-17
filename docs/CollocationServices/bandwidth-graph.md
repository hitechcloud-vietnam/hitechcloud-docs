# Biểu đồ băng thông

Trả về các ảnh mã hóa base64 biểu diễn mức sử dụng băng thông trong ngày, tuần và tháng gần nhất.

### Yêu cầu HTTP
```
GET /service/@id/bandwidth-graphs
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/bandwidth-graphs" \
   -H "Authorization: Bearer $token"
```
