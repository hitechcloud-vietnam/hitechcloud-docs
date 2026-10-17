# Sửa IP

Cập nhật tên miền của một IP.


### Yêu cầu HTTP
```
POST /service/@id/ips/@ip
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| ip | string | ID địa chỉ IP |
| domain | string | Tên miền |

```bash
POST_DATA="{
    \"domain\": \"domainValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/ips/@ip" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
