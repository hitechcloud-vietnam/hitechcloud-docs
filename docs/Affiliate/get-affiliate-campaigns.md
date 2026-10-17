# Lấy danh sách chiến dịch tiếp thị liên kết
Mô tả: Lấy danh sách các chiến dịch tiếp thị liên kết có trong hệ thống HiTechCloud.
## Tổng quan
Endpoint API `GET /affiliates/campaigns` cho phép đối tác tiếp thị liên kết lấy danh sách các chiến dịch hiện có trong hệ thống Photue Software. Endpoint này trả về chi tiết chiến dịch như tên, mô tả và các thông tin liên quan khác, giúp đối tác quảng bá sản phẩm hoặc dịch vụ hiệu quả. Yêu cầu xác thực bằng token Bearer hợp lệ trong header của yêu cầu.


### Yêu cầu HTTP
```
GET /affiliates/campaigns
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/campaigns" \
   -H "Authorization: Bearer $token"
```
