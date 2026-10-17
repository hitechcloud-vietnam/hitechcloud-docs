# Cập nhật thông tin người dùng

Cập nhật thông tin đăng ký của tài khoản của tôi.

### Yêu cầu HTTP
```
PUT /details
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|------------------------|--------|------------------------------|
| type | string | Loại tài khoản (Private, Company) |
| companyname | string | Tổ chức |
| taxid | string | Mã số thuế |
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
| postcode | string | Mã bưu chính |
| managementagency | string | Cơ quan quản lý thuế |
| telegramnotifications | string | Thông báo Telegram |
| email2 | string | Email phụ |

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
    \"postcode\": \"postcodeValue\",
    \"managementagency\": \"managementagencyValue\",
    \"telegramnotifications\": \"telegramnotificationsValue\",
    \"email2\": \"email2Value\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/details" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "client": {
        "id": "26",
        "email": "api@example.com",
        "lastlogin": "2016-12-30 12:34:20",
        "ip": "172.100.2.1",
        "host": "hostname",
        "firstname": "Joe",
        "lastname": "Doe",
        "companyname": "",
        "address1": "Pretty View Lane",
        "address2": "3194",
        "city": "Santa Rosa",
        "state": "California",
        "postcode": "95401",
        "country": "US",
        "phonenumber": "+1.24123123"
    },
    "info": [
        "client_info_updated"
    ]
}
```

