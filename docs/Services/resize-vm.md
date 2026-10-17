# Thay đổi cấu hình máy ảo

Thay đổi tài nguyên của máy ảo.

### Yêu cầu HTTP
```
PUT /service/@id/vms/@vmid
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy ảo |
| memory | string | Dung lượng RAM (MB) |
| cpu | string | Số nhân CPU |

```bash
POST_DATA="{
    \"memory\": \"memoryValue\",
    \"cpu\": \"cpuValue\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/service/@id/vms/@vmid" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
