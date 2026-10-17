# Xóa vùng DNS

Xóa vùng DNS đã chọn.

### Yêu cầu HTTP
```
DELETE /service/@service_id/dns/@zone_id
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|--------|--------------|
| service_id | int | ID dịch vụ |
| zone_id | int | ID vùng |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@service_id/dns/@zone_id" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
   "info": [
     "Domain zone testzone.com was deleted successfully."
   ]
}
```
