---
id: create-vm
title: Tạo máy ảo
---

## Tạo máy ảo

Thêm một máy chủ ảo mới.

### Yêu cầu HTTP

`POST /service/@id/vms`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|-----------------|--------|--------------------------------------|
| id | int | ID dịch vụ |
| label | string | Nhãn máy ảo |
| template | string | ID mẫu |
| flavor | string | Flavor mô tả CPU và bộ nhớ của máy ảo |
| disk | string | Dung lượng ổ đĩa (GB) |
| security_group | string | Nhóm bảo mật mạng |
| keypair | string | Tên khóa SSH |
| password | string | Mật khẩu của người dùng root |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"label\": \"labelValue\",
    \"template\": \"templateValue\",
    \"flavor\": \"flavorValue\",
    \"disk\": \"diskValue\",
    \"security_group\": \"security_groupValue\",
    \"keypair\": \"keypairValue\",
    \"password\": \"passwordValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```