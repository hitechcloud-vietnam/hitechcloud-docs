# Đặt hàng tên miền mới

Tạo đơn hàng mới cho một tên miền. Hãy bảo đảm tên miền còn khả dụng trước khi tiếp tục.

### Yêu cầu HTTP
```
POST /domain/order
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|--------|---------------------------------|
| name | string | Tên miền |
| years | string | Số năm |
| action | string | register|transfer |
| tld_id | int | ID TLD |
| pay_method | int | ID phương thức thanh toán |
| nameservers | array | Nameserver (tùy chọn) |
| aff_id | int | ID đối tác tiếp thị liên kết |

```bash
POST_DATA="{
    \"name\": \"example.com\",
    \"years\": \"yearsValue\",
    \"action\": \"register\",
    \"tld_id\": 42,
    \"pay_method\": 5,
    \"nameservers\": [
        "ns1.example.com",
        {
            "host": "ns2.example.com",
            "ip": "123.234.123.234"
        }
    ],
    \"aff_id\": 55
}"

curl -X POST "https://my.photuesoftware.vn/api/domain/order" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "order_num": 563647679,
    "invoice_id": "308977",
    "total": "10.00",
    "items": {
        "id": "10",
        "type": "Domain Register",
        "name": "test.com",
        "product_id": "3"
    }
}
```
