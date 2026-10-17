# Đặt hàng dịch vụ mới

Tạo và gửi một đơn hàng mới cho sản phẩm đã chọn.

### Yêu cầu HTTP
```
POST /order/@product_id
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|--------|--------------|
| product_id | int | ID sản phẩm |
| domain | string | Tên miền |
| cycle | string | Chu kỳ thanh toán |
| pay_method | int | ID phương thức thanh toán |

```bash
POST_DATA="{
    \"product_id\": 12,
    \"domain\": \"example.com\",
    \"cycle\": \"m\",
    \"pay_method\": \"1\",
    \"custom\": {
        \"1618\": {
            \"10330\": 1
        }
    },
    \"promocode\": \"T346F\",
    \"aff_id\": 55
}"

curl -X POST "https://my.photuesoftware.vn/api/order/@product_id" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "order_num": 873340995,
    "invoice_id": "308979",
    "total": "9.99",
    "items": {
        "id": "10",
        "type": "Hosting",
        "name": "test.com",
        "product_id": "3"
    }
}
```

