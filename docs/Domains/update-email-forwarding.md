# Cập nhật chuyển tiếp email

Cập nhật cấu hình chuyển tiếp email của tên miền.

### Yêu cầu HTTP
```
PUT /domain/@id/emforwarding
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------------------|
| id | int | ID tên miền |
| from | string | Địa chỉ email chuyển tiếp từ |
| to | string | Địa chỉ email chuyển tiếp đến |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"from\": \"info@domain.com\",
    \"to\": \"destination@domain.com\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/emforwarding" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
