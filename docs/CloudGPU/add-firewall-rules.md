# Thêm quy tắc tường lửa

Thêm quy tắc tường lửa cho máy chủ ảo.

### Yêu cầu HTTP
```
POST /service/@id/vms/firewall
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------------|--------|-----------------------------------------|
| id | int | ID dịch vụ |
| action | string | accept hoặc drop |
| type | string | source, destination hoặc both |
| comment | string | Chuỗi ghi chú tự do (0-250 ký tự) |
| protocol | string | tcp, udp hoặc icmp |
| address_start | string | Địa chỉ IP hợp lệ |
| address_end | string | Địa chỉ IP hợp lệ |
| port_start | string | Cổng bắt đầu của dải (1-65535) |
| port_end | string | Cổng kết thúc của dải (1-65535) |

```bash
POST_DATA="{
    \"action\": \"actionValue\",
    \"type\": \"typeValue\",
    \"comment\": \"commentValue\",
    \"protocol\": \"protocolValue\",
    \"address_start\": \"address_startValue\",
    \"address_end\": \"address_endValue\",
    \"port_start\": \"port_startValue\",
    \"port_end\": \"port_endValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/firewall" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

