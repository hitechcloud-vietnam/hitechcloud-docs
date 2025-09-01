---
id: contact-privileges
title: Contact Privileges
---

## Contact Privileges

List possible contact privileges. Each domain and service may list additional privileges, depending on available features.

### HTTP Request

`GET /contact/privileges`

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/contact/privileges" \
   -H "Authorization: Bearer $token"
```

### Example Response

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