# Hủy dịch vụ

Yêu cầu hủy một dịch vụ.

### Yêu cầu HTTP
```
POST /service/@id/cancel
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-------------|--------|---------------------------------|
| id | int | ID dịch vụ |
| immediate | string | Hủy ngay hoặc hủy sau |
| reason | string | Lý do hủy |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"immediate\": "immediateValue",
    \"reason\": "reasonValue"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/cancel" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
