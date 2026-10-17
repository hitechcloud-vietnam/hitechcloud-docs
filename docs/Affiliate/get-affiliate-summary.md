# Lấy tổng quan tiếp thị liên kết
Mô tả: Lấy tổng quan về hiệu quả và các chỉ số tiếp thị liên kết từ hệ thống HiTechCloud.

## Tổng quan

Endpoint API `GET /affiliates/summary` cho phép đối tác tiếp thị liên kết lấy tổng quan các chỉ số hiệu quả của họ trong hệ thống HiTechCloud. Endpoint này trả về các thông tin chính như tổng thu nhập, hiệu quả chiến dịch và các số liệu thống kê liên quan khác, giúp đối tác theo dõi hoạt động và kết quả chung. Yêu cầu xác thực bằng token Bearer hợp lệ trong header của yêu cầu.

### Yêu cầu HTTP
```
GET /affiliates/summary
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/summary" \
   -H "Authorization: Bearer $token"
```

