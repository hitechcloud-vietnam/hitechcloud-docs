---
id: contact-privileges
title: Quyền của liên hệ
---

## Quyền của liên hệ

Liệt kê các quyền có thể gán cho liên hệ. Mỗi tên miền và dịch vụ có thể liệt kê thêm quyền, tùy theo các tính năng hiện có.

### Yêu cầu HTTP

`GET /contact/privileges`

### Yêu cầu mẫu

```bash
curl -X GET "https://my.photuesoftware.vn/api/contact/privileges" \
   -H "Authorization: Bearer $token"
```

### Phản hồi mẫu

```json
{
    "privileges": {
        "billing": [
            "emails", // Receive billing notifications
            "payinvoice", // Allow to view/pay invoices
            "orders", // Allow to place new orders
            "balance", // View account balance
            "addfunds", // Add account funds
            "creditcard" // Edit Credit Card details
        ],
        "support": [
            "newticket", // Open new tickets
            "tickets", // View all tickets
            "closeticket", // Close tickets
            "emails" // Receive email notifications from support
        ],
        "misc": [
            "editmain", // Modify main profile details
            "emails", // View emails history
            "editipaccess", // Edit allowed IP access
            "manageprofiles", // Add / Edit contacts
            "affiliates" // Access affiliates section
        ],
        "services": {
            "full": 1, // Full control over services
            "332": [
                "basic", // View basic details
                "billing", // View billing info
                "cancelation", // Request cancellation
                "upgrade", // Upgrade / Downgrade
                "notify" // Receive related email notifications
            ]
        },
        "domains": {
            "full": 1, // Full control over domains
            "523": [
                "basic", // View basic details
                "renew", // Renew domain
                "notify", // Receive related email notifications
                "contactinfo" // Contact Information
            ]
        }
    }
}
```