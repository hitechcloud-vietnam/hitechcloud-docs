# Xóa bản ghi DNS

Xóa một bản ghi DNS.

### Yêu cầu HTTP
```
DELETE /domain/@id/dns/@index
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|------------|--------|----------------------|
| id | int | ID tên miền |
| record_id | int | Chỉ số bản ghi |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/domain/@id/dns/@index" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "info": [
        "DNS Management updated successfully"
    ]
}
```
