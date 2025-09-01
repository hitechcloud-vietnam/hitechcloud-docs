# Get Affiliate Payouts
Get Affiliate Payouts description: Retrieve a list of affiliate payouts from the HiTechCloud system.

Overview

The GET /affiliates/payouts API endpoint allows affiliates to retrieve a list of their payouts in the HiTechCloud system. This endpoint provides details about payout amounts, dates, statuses, and other relevant information, enabling affiliates to track their payment history effectively. Authentication is required using a valid Bearer token in the request header.

### HTTP Request
```
GET /affiliates/payouts
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/payouts" \
   -H "Authorization: Bearer $token"
```
