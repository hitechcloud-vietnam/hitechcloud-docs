# Danh sách phần mềm máy chủ cho chứng chỉ

Trả về danh sách ID phần mềm máy chủ mà chứng chỉ yêu cầu.

### Yêu cầu HTTP
```
GET /certificate/order/@product_id/software
```

### Tham số truy vấn
| Tham số | Kiểu | Mô tả |
|--------------|------|-------------------------|
| product_id | int | ID sản phẩm chứng chỉ |

```bash
curl -X GET "https://my.photuesoftware.vn/api/certificate/order/@product_id/software" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu
```json
{
    "software": [
        {
            "id": 0,
            "name": "AOL"
        },
        {
            "id": 1,
            "name": "Apache-SSL (Ben-SSL, not Stronghold)"
        }
    ]
}
```
