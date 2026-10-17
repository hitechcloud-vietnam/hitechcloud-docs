# Đặt hàng chứng chỉ mới

Tạo đơn hàng mới cho một chứng chỉ.

### Yêu cầu HTTP
```
POST /certificate/order
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|------------------|--------|---------------------------------|
| product_id | int | ID sản phẩm chứng chỉ |
| csr | string | Tên miền |
| years | int | Số năm |
| pay_method | int | ID phương thức thanh toán |
| approver_email | string | Địa chỉ email xác thực |
| admin | int | ID liên hệ quản trị |
| tech | int | ID liên hệ kỹ thuật |
| billing | int | ID liên hệ thanh toán |
| organization | array | Thông tin tổ chức |
| software | int | ID máy chủ/phần mềm |
| data | array | Dữ liệu bổ sung cho sản phẩm |
| aff_id | int | ID đối tác tiếp thị liên kết |

```bash
POST_DATA="{
    \"product_id\": \"product_idValue\",
    \"csr\": \"example.com\",
    \"years\": \"yearsValue\",
    \"pay_method\": \"pay_methodValue\",
    \"approver_email\": \"approver_emailValue\",
    \"admin\": \"adminValue\",
    \"tech\": \"techValue\",
    \"billing\": \"billingValue\",
    \"organization\": \"organizationValue\",
    \"software\": \"softwareValue\",
    \"data\": \"dataValue\",
    \"aff_id\": 55
}"

curl -X POST "https://my.photuesoftware.vn/api/certificate/order" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "order_num": 873340994,
    "invoice_id": "308978",
    "total": "27.85",
    "items": {
        "id": "10",
        "type": "Hosting",
        "name": "test.com",
        "product_id": "3"
    }
}
```
