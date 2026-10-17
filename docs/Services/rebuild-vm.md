# Cài lại máy ảo

Cài lại máy ảo bằng một mẫu được chỉ định.

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/rebuild
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |
| template | string | ID mẫu |

```bash
POST_DATA="{
    \"template\": \"templateValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/rebuild" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
