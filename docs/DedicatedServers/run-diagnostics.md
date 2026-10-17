# Chạy chẩn đoán

Bắt đầu một thao tác chẩn đoán mới.

### Yêu cầu HTTP
```
POST /service/@id/diag
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|---------------|--------|---------------------------------|
| id | int | ID dịch vụ |
| template | string | ID mẫu chẩn đoán |
| clearhdd | bool | Xóa ổ đĩa |
| fullhddclear | bool | Xóa sạch toàn bộ ổ cứng (yêu cầu đặt `clearhdd` là True) |

```bash
POST_DATA="{
    \"template\": \"templateValue\",
    \"clearhdd\": \"clearhddValue\",
    \"fullhddclear\": \"fullhddclearValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/diag" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
