# Lấy danh sách các lần chi trả tiếp thị liên kết
Mô tả: Lấy danh sách các lần chi trả tiếp thị liên kết từ hệ thống HiTechCloud.

## Tổng quan

Endpoint API `GET /affiliates/payouts` cho phép đối tác tiếp thị liên kết lấy danh sách các lần chi trả của họ trong hệ thống HiTechCloud. Endpoint này trả về chi tiết về số tiền chi trả, ngày chi trả, trạng thái và các thông tin liên quan khác, giúp đối tác theo dõi lịch sử thanh toán hiệu quả. Yêu cầu xác thực bằng token Bearer hợp lệ trong header của yêu cầu.

### Yêu cầu HTTP
```
GET /affiliates/payouts
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/payouts" \
   -H "Authorization: Bearer $token"
```
