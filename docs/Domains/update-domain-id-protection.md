# Cập nhật bảo vệ danh tính tên miền

Bật hoặc tắt bảo vệ danh tính cho tên miền.

### Yêu cầu HTTP
```
PUT /domain/@id/idprotection
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|-------|---------------------------------|
| id | int | ID tên miền |
| switch | bool | Bật hoặc tắt bảo vệ danh tính |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"switch\": true
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/idprotection" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
