# Cập nhật rDNS

Cập nhật các bản ghi DNS ngược cho các địa chỉ IP của dịch vụ.

### Yêu cầu HTTP
```
POST /service/@id/rdns
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-------------|--------|-------------|
| id | int | ID dịch vụ |
| ipaddress | array | Địa chỉ IP |

```bash
POST_DATA="{
    \"ipaddress\": \"ipaddressValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/rdns" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
