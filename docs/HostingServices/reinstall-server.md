---
id: reinstall-server
title: Cài lại máy chủ
---

## Cài lại máy chủ

Cài lại máy chủ với các tùy chọn được chỉ định.

### Yêu cầu HTTP

`POST /service/@id/reinstall`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-------------------|--------|-------------|
| id | int | ID dịch vụ |
| profile | int | ID hồ sơ |
| rootpassword | string | Mật khẩu root |
| adminuser | string | Tên người dùng quản trị |
| userpassword | string | Mật khẩu người dùng |
| packageselection | string | Lựa chọn gói |
| extra1 | string | Tùy chọn bổ sung |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"profile\": \"profileValue\",
    \"rootpassword\": \"rootpasswordValue\",
    \"adminuser\": \"adminuserValue\",
    \"userpassword\": \"userpasswordValue\",
    \"packageselection\": \"packageselectionValue\",
    \"extra1\": \"extra1Value\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/reinstall" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```