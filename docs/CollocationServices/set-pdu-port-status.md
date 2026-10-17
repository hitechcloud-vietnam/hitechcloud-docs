# Đặt trạng thái cổng PDU

Đặt trạng thái của một cổng/ổ cắm PDU.


### Yêu cầu HTTP
```
POST /service/@id/pdu/@port
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |
| port | int | ID cổng |
| power | bool | Trạng thái nguồn mong muốn ('true' là bật, 'false' là tắt) |

```bash
POST_DATA="{
    \"power\": \"powerValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/pdu/@port" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
