# Đổi khóa SSH

Thêm khóa SSH cho máy chủ ảo.

### Yêu cầu HTTP
```
POST /service/@id/vms/@vmid/addsshkey
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|-----------|--------|---------------------|
| id | int | ID dịch vụ |
| vmid | string | ID máy ảo |
| keys | array | Danh sách ID khóa SSH |

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/vms/@vmid/addsshkey" \
   -H "Authorization: Bearer $token"
```
