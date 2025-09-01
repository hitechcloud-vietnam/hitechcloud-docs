# Get Affiliate Campaigns
Get Affiliate Campaigns description: Retrieve a list of affiliate campaigns available in the HiTechCloud system.
## Overview
The GET /affiliates/campaigns API endpoint allows affiliates to retrieve a list of available campaigns in the Photue Software system. This endpoint provides campaign details, such as names, descriptions, and other relevant information, enabling affiliates to promote products or services effectively. Authentication is required using a valid Bearer token in the request header.


### HTTP Request
```
GET /affiliates/campaigns
```

```bash
curl -X GET "https://my.photuesoftware.vn/api/affiliates/campaigns" \
   -H "Authorization: Bearer $token"
```
