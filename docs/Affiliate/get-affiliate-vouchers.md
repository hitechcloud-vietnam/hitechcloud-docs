# Get Affiliate Vouchers
Get Affiliate Vouchers description: Retrieve a list of affiliate vouchers from the HiTechCloud system.

Overview

The GET /affiliates/vouchers API endpoint allows affiliates to retrieve a list of their vouchers in the HiTechCloud system. This endpoint provides details about available vouchers, such as voucher codes, associated campaigns, and other relevant information, enabling affiliates to manage and distribute promotional vouchers effectively. Authentication is required using a valid Bearer token in the request header.
### HTTP Request
```
GET /affiliates/vouchers
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/vouchers" \
   -H "Authorization: Bearer $token"
```