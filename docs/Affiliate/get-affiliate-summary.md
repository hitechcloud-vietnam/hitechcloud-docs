# Get Affiliate Summary
Get Affiliate Summary description: Retrieve a summary of affiliate performance and metrics from the HiTechCloud system.

Overview

The GET /affiliates/summary API endpoint allows affiliates to retrieve a summary of their performance metrics in the HiTechCloud system. This endpoint provides key information such as total earnings, campaign performance, and other relevant statistics, enabling affiliates to monitor their overall activity and success. Authentication is required using a valid Bearer token in the request header.

### HTTP Request
```
GET /affiliates/summary
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/summary" \
   -H "Authorization: Bearer $token"
```

