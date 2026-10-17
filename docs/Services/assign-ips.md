# Gán IP

Gán một IP mới cho giao diện mạng.

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/ippool/@pool
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |
| pool | string | ID danh sách để cấp IP mới |
| type | string | IPv4 hoặc IPv6 |
| iface | int | Số thứ tự giao diện |

```bash
POST_DATA="{
    \"type\": \"typeValue\",
    \"iface\": \"ifaceValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/ippool/@pool" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
