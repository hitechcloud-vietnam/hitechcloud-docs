# Yêu cầu nâng cấp

Ước tính hoặc yêu cầu nâng cấp cho máy chủ ảo.


### Yêu cầu HTTP
```
POST /service/@id/upgrade
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------------------|
| id | int | ID dịch vụ |
| resources | array | Mảng giá trị tài nguyên |
| package | int | ID gói mới (tùy chọn) |
| cycle | string | Chu kỳ thanh toán mới (tùy chọn) |
| send | bool | Gửi yêu cầu nâng cấp (tùy chọn) |

```bash
POST_DATA="{
    \"resources\": {
        \"key\": \"value\"
    },
    \"package\": \"packageValue\",
    \"cycle\": \"cycleValue\",
    \"send\": \"sendValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
