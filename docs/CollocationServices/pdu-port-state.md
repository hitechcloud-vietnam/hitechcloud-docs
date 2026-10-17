# Trạng thái cổng PDU

Lấy trạng thái của một cổng/ổ cắm PDU.

### Yêu cầu HTTP
```
GET /service/@id/pdu/@port
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |
| port | int | ID cổng |

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/pdu/@port"
```
