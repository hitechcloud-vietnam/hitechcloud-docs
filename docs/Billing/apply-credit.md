# Áp dụng tín dụng

Áp dụng tín dụng tài khoản vào một hóa đơn.

```bash
POST_DATA="{
    \"amount\": \"amountValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/invoice/@id/credit" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Yêu cầu HTTP
```
POST /invoice/@id/credit
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|-----------------------------------------------------------------------------|
| amount | number | Số tín dụng (tùy chọn). Nếu không chỉ định, hệ thống dùng số tối đa. |

### Phản hồi mẫu
```json
{
    "success": true,
    "invoice_status": "Paid",
    "applied": 2.1
}
```

