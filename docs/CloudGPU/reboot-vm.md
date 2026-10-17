# Khởi động lại máy ảo

Khởi động lại máy chủ ảo.

### Yêu cầu HTTP
```
PUT /service/@id/vms/reboot
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|------|-------------|
| id | int | ID dịch vụ |

```bash
curl -X PUT "https://my.photuesoftware.vn/api/service/@id/vms/reboot"
```
