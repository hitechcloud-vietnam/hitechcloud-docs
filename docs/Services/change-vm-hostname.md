# Đổi hostname máy ảo

Cập nhật hostname của máy ảo.

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/hostname
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |
| hostname | string | Hostname mới |

```bash
POST_DATA="{
    \"hostname\": \"hostnameValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/hostname" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
