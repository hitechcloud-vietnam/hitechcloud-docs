# Đặt hàng nhiều dịch vụ

Tạo và gửi một đơn hàng mới cho nhiều dịch vụ.

### Yêu cầu HTTP
```
POST /order
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------------|--------|--------------|
| pay_method | int | ID phương thức thanh toán |
| ignore_errors | bool | Bỏ qua lỗi |
| items | array | Danh sách các mục của đơn hàng |

```bash
POST_DATA="{
    \"pay_method\": 1,
    \"ignore_errors\": \"No error\",
    \"items\": [
        {
            \"type\": \"product\",
            \"product_id\": 1080,
            \"domain\": \"hosting.com\",
            \"cycle\": \"a\"
        },
        {
            \"type\": \"certificate\",
            \"product_id\": 840,
            \"csr\": \"-----BEGIN CERTIFICATE REQUEST----- (...)",
            \"years\": 1,
            \"approver_email\": \"admin@hosting.com\"
        }
    ]
}"

curl -X POST "https://my.photuesoftware.vn/api/order" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "order_num_list": [
        179534732,
        179534732
    ],
    "invoice_id": "503425",
    "total": "94.40",
    "items": [
        {
            "type": "Hosting",
            "id": "1025",
            "name": "hosting.com",
            "product_id": "1080"
        }
    ]
}
```

