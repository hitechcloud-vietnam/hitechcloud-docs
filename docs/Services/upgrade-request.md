# Yêu cầu nâng cấp

Ước tính hoặc yêu cầu nâng cấp cho một dịch vụ.

### Yêu cầu HTTP
```
POST /service/@id/upgrade
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-------------|--------|---------------------------------|
| id | int | ID dịch vụ |
| resources | array | Giá trị tài nguyên |
| package | int | ID gói mới (tùy chọn) |
| cycle | string | Chu kỳ thanh toán mới (tùy chọn) |
| send | bool | Gửi yêu cầu nâng cấp |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"resources\": "resourcesValue",
    \"package\": "packageValue",
    \"cycle\": "cycleValue",
    \"send\": "sendValue"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
