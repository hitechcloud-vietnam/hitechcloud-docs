# Thêm giao diện mạng

Thêm giao diện mạng mới cho máy ảo.

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/interfaces
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |
| firewall | int | Bật hoặc tắt tường lửa |
| ipv4 | int[] | Danh sách ID IPv4 |
| ipv6 | int[] | Danh sách ID IPv6 |

```bash
POST_DATA="{
    \"firewall\": \"firewallValue\",
    \"ipv4\": \"ipv4Value\",
    \"ipv6\": \"ipv6Value\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
