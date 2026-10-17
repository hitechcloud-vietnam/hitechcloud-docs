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
| template_id | string | ID mẫu |
| password | string | Mật khẩu root ban đầu |
| memory | string | Dung lượng RAM (MB) |
| cpu | string | Số nhân CPU |
| cpu_share | string | Tỷ lệ chia sẻ CPU (%) |
| disk | string | Dung lượng ổ đĩa (GB) |
| swap | string | Dung lượng swap (GB) |
| note | string | Ghi chú tùy chỉnh |
| license_key | string | Loại giấy phép hệ điều hành (bắt buộc với máy ảo Windows) |
| license_type | string | Khóa giấy phép (nếu dùng giấy phép riêng) |

### Yêu cầu mẫu

```bash
POST_DATA="{
    \"label\": \"labelValue\",
    \"template_id\": \"template_idValue\",
    \"password\": \"passwordValue\",
    \"memory\": \"memoryValue\",
    \"cpu\": \"cpuValue\",
    \"cpu_share\": \"cpu_shareValue\",
    \"disk\": \"diskValue\",
    \"swap\": \"swapValue\",
    \"note\": \"noteValue\",
    \"license_key\": \"license_keyValue\",
    \"license_type\": \"license_typeValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```