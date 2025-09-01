# Account Balance

Get current account balance (unpaid invoices total) and account credit.
Get Account Balance description: Retrieve the current account balance and credit information from the HiTechCloud system.

Overview

The GET /balance API endpoint allows users to retrieve their current account balance (total unpaid invoices) and account credit in the HiTechCloud system. This endpoint provides details such as the currency, account balance, and available credit, enabling users to monitor their financial status effectively. Authentication is required using a valid Bearer token in the request header.
```bash
curl -X GET "https://my.photuesoftware.vn/api/balance" \
   -H "Authorization: Bearer $token"
```
### HTTP Request
```
GET /balance
```

### Example Response
```json
{
    "success": true,
    "details": {
        "currency": "USD",
        "acc_balance": "123456.55",
        "acc_credit": "0.00"
    }
}
```

