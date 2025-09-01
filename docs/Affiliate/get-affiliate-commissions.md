# Get Affiliate Commissions
Get Affiliate Commissions description: Retrieve a list of affiliate commissions from the HiTechCloud system.

Overview

The GET /affiliates/commissions API endpoint allows affiliates to retrieve a list of their earned commissions in the HiTechCloud system. This endpoint provides details about commission amounts, statuses, and other relevant information, enabling affiliates to track their earnings effectively. Authentication is required using a valid Bearer token in the request header.

### HTTP Request
```
GET /affiliates/commissions
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/commissions" \
   -H "Authorization: Bearer $token"
```

