# Tạo máy ảo

Thêm một máy ảo mới.

### Yêu cầu HTTP
```
POST /service/@id/vms
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|-------------------------|
| id | int | ID dịch vụ |
| label | string | Nhãn máy ảo |
| template | string | ID mẫu |
| memory | string | Dung lượng RAM (MB) |
| cpu | string | Số nhân CPU |
| disk | string | Dung lượng ổ đĩa (GB) |
| interface | array | Cấu hình giao diện |

```bash
POST_DATA="{
    \"label\": \"labelValue\",
    \"template\": \"templateValue\",
    \"memory\": \"memoryValue\",
    \"cpu\": \"cpuValue\",
    \"disk\": \"diskValue\",
    \"interface\": \"interfaceValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
