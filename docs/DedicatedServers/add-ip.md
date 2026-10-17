# Thêm IP

Thêm một IP mới cho máy chủ.

### Yêu cầu HTTP
```
POST /service/@id/ips
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------------------|
| id | int | ID dịch vụ |
| vlan | string | ID VLAN |
| domain | string | Tên miền của IP |
| num | string | Số lượng IP cần thêm (tùy chọn) |

```bash
POST_DATA="{
    \"vlan\": \"vlanValue\",
    \"domain\": \"domainValue\",
    \"num\": \"numValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/ips" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
