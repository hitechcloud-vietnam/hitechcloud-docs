# Lấy danh sách hoa hồng tiếp thị liên kết
Mô tả: Lấy danh sách hoa hồng tiếp thị liên kết từ hệ thống HiTechCloud.

## Tổng quan

Endpoint API `GET /affiliates/commissions` cho phép đối tác tiếp thị liên kết lấy danh sách hoa hồng mà họ đã nhận trong hệ thống HiTechCloud. Endpoint này trả về chi tiết về số tiền hoa hồng, trạng thái và các thông tin liên quan khác, giúp đối tác theo dõi thu nhập hiệu quả. Yêu cầu xác thực bằng token Bearer hợp lệ trong header của yêu cầu.

### Yêu cầu HTTP
```
GET /affiliates/commissions
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/commissions" \
   -H "Authorization: Bearer $token"
```

