# Cập nhật giao diện mạng

Cập nhật thông tin của một giao diện mạng.

### Yêu cầu HTTP
```
PUT /service/@id/vms/@vmid/interfaces/@iface
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------------------|
| id | int | ID dịch vụ |
| vmid | int | ID máy ảo |
| iface | int | Số thứ tự giao diện |
| firewall | int | Bật hoặc tắt tường lửa |
| ipv4 | int[] | Danh sách ID IPv4 |
| ipv6 | int[] | Danh sách ID IPv6 |

```bash
POST_DATA="{
    \"firewall\": \"firewallValue\",
    \"ipv4\": \"ipv4Value\",
    \"ipv6\": \"ipv6Value\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/interfaces/@iface" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
