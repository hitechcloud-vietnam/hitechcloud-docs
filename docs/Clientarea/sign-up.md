# Đăng ký

Tạo tài khoản mới.

### Yêu cầu HTTP
```
POST /signup
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-------------------|--------|------------------------------|
| type | string | Loại tài khoản (Private, Company) |
| companyname | string | Tổ chức (bắt buộc với tài khoản tổ chức) |
| taxid | string | Mã số thuế (bắt buộc với tài khoản tổ chức) |
| gender | string | Giới tính (Nam, Nữ) |
| lastname | string | Họ |
| firstname | string | Tên |
| nationalid | string | Số CMND/CCCD |
| email | string | Địa chỉ email |
| birthday | string | Ngày sinh |
| phonenumber | string | Số điện thoại |
| country | string | Quốc gia |
| state | string | Tỉnh/Bang |
| city | string | Thành phố |
| address1 | string | Địa chỉ 1 |
| password | string | Mật khẩu |
| postcode | string | Mã bưu chính |
| managementagency | string | Cơ quan quản lý thuế |
| email2 | string | Email phụ |
| currency | string | Đơn vị tiền tệ (ví dụ: VND, USD, EUR) |

```bash
POST_DATA="{
    \"type\": \"typeValue\",
    \"companyname\": \"companynameValue\",
    \"taxid\": \"taxidValue\",
    \"gender\": \"genderValue\",
    \"lastname\": \"lastnameValue\",
    \"firstname\": \"firstnameValue\",
    \"nationalid\": \"nationalidValue\",
    \"email\": \"emailValue\",
    \"birthday\": \"birthdayValue\",
    \"phonenumber\": \"phonenumberValue\",
    \"country\": \"countryValue\",
    \"state\": \"stateValue\",
    \"city\": \"cityValue\",
    \"address1\": \"address1Value\",
    \"password\": \"passwordValue\",
    \"postcode\": \"postcodeValue\",
    \"managementagency\": \"managementagencyValue\",
    \"email2\": \"email2Value\",
    \"currency\": \"currencyValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/signup" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "info": [
        "client_registered"
    ]
}
```
