# Gia hạn tên miền

Tạo đơn gia hạn mới cho một tên miền.

### Yêu cầu HTTP
```
POST /domain/@id/renew
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-------------|--------|-------------------|
| years | string | Số năm |
| pay_method | int | ID phương thức thanh toán |

```bash
POST_DATA="{
    \"years\": \"yearsValue\",
    \"pay_method\": \"pay_methodValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/@id/renew" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
