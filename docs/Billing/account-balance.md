# Số dư tài khoản

Lấy số dư tài khoản hiện tại (tổng hóa đơn chưa thanh toán) và tín dụng tài khoản.
Mô tả: Lấy số dư tài khoản hiện tại và thông tin tín dụng từ hệ thống HiTechCloud.

## Tổng quan

Endpoint API `GET /balance` cho phép người dùng lấy số dư tài khoản hiện tại (tổng các hóa đơn chưa thanh toán) và tín dụng tài khoản trong hệ thống HiTechCloud. Endpoint này trả về các thông tin như đơn vị tiền tệ, số dư tài khoản và tín dụng khả dụng, giúp người dùng theo dõi tình hình tài chính hiệu quả. Yêu cầu xác thực bằng token Bearer hợp lệ trong header của yêu cầu.
```bash
curl -X GET "https://my.photuesoftware.vn/api/balance" \
   -H "Authorization: Bearer $token"
```
### Yêu cầu HTTP
```
GET /balance
```

### Phản hồi mẫu
```json
{
    "success": true,
    "details": {
        "currency": "USD",
        "acc_balance": "123456.55",
        "acc_credit": "0.00"
    }
}
```

