# Lấy danh sách voucher tiếp thị liên kết
Mô tả: Lấy danh sách voucher tiếp thị liên kết từ hệ thống HiTechCloud.

## Tổng quan

Endpoint API `GET /affiliates/vouchers` cho phép đối tác tiếp thị liên kết lấy danh sách voucher của họ trong hệ thống HiTechCloud. Endpoint này trả về chi tiết về các voucher hiện có như mã voucher, chiến dịch liên quan và các thông tin khác, giúp đối tác quản lý và phân phối voucher khuyến mại hiệu quả. Yêu cầu xác thực bằng token Bearer hợp lệ trong header của yêu cầu.
### Yêu cầu HTTP
```
GET /affiliates/vouchers
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/vouchers" \
   -H "Authorization: Bearer $token"
```