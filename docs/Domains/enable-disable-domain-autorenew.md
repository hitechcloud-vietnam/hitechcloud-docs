# Bật/tắt tự động gia hạn tên miền

Bật hoặc tắt chế độ tự động gia hạn của tên miền.

### Yêu cầu HTTP
```
PUT /domain/@id/autorenew
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-------------|-------|---------------------------------|
| id | int | ID tên miền |
| autorenew | bool | Bật hoặc tắt tự động gia hạn |

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"autorenew\": true
}"

curl -X PUT "https://my.photuesoftware.vn/api/domain/@id/autorenew" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
