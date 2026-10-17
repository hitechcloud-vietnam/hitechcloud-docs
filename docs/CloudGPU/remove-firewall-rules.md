# Xóa quy tắc tường lửa

Xóa quy tắc tường lửa khỏi máy chủ ảo.

### Yêu cầu HTTP
```
DELETE /service/@id/vms/firewall/@position
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| position | string | Vị trí quy tắc |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@id/vms/firewall/@position"
```
