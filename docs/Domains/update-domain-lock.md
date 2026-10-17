# Cập nhật khóa tên miền

Bật hoặc tắt khóa tên miền.

### Yêu cầu HTTP
```
PUT /domain/@id/reglock
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|-------|---------------------------------|
| id | int | ID tên miền |
| switch | bool | Bật hoặc tắt khóa tên miền |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"switch\": true
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/reglock" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
