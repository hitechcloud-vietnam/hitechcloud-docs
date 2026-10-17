# Thêm liên hệ

Tạo tài khoản liên hệ mới. Nếu cung cấp mật khẩu, bạn có thể dùng địa chỉ email đã cung cấp để đăng nhập với tư cách liên hệ đó.
### Yêu cầu HTTP
```
POST /contact
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|------------------------|--------|------------------------------|
| password | string | Tùy chọn, cho phép bạn đăng nhập với tư cách liên hệ |
| privileges | array | Mảng các quyền cần bật |
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
    \"password\": \"passwordValue\",
    \"privileges\": \"privilegesValue\",
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

curl -X POST "https://my.photuesoftware.vn/api/contact" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Phản hồi mẫu
```json
{
    "contact_id": "1",
    "info": [
        "profile_added"
    ]
}
```

