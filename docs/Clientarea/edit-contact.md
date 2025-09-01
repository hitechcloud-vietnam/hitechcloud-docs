---
id: edit-contact
title: Edit Contact
---

## Edit Contact

Update details of a specific contact.

### HTTP Request

`PUT /contact/@id`

### Query Parameters

| Parameter             | Type   | Description                          |
|-----------------------|--------|--------------------------------------|
| id                   | int    | Contact ID                          |
| privileges           | array  | Array with privileges to enable      |
| type                 | string | Account Type (Private, Company)      |
| companyname          | string | Organization                         |
| taxid                | string | Tax ID                               |
| gender               | string | Gender (Nam, Nữ)                     |
| lastname             | string | Last Name                            |
| firstname            | string | First Name                           |
| nationalid           | string | National ID or Passport              |
| email                | string | Email Address                        |
| birthday             | string | Date of Birth                        |
| phonenumber          | string | Phone Number                         |
| country              | string | Country                              |
| state                | string | State                                |
| city                 | string | City                                 |
| address1             | string | Address Line 1                       |
| postcode             | string | Postcode                             |
| managementagency     | string | Tax Management Agency                |
| telegramnotifications| array  | Telegram notifications               |
| email2               | string | Secondary Email                      |

### Example Request

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"privileges\": \"privilegesValue\",
    \"type\": \"typeValue\",
    \"companyname\": \"companynameValue\",
    \"taxid\": \"taxidValue\",
    \"gender\": \"genderValue\",
    \"lastname\": \"lastnameValue\",
    \"firstname\": \"firstnameValue\",
    \"nationalid\": \"nationalidValue\",
    \"email\": \"emailValue\",
    \"birthday\": \"birthdayValue\",
    \"phonenumber\": \"phonenumberValue\",
    \"country\": \"countryValue\",
    \"state\": \"stateValue\",
    \"city\": \"cityValue\",
    \"address1\": \"address1Value\",
    \"postcode\": \"postcodeValue\",
    \"managementagency\": \"managementagencyValue\",
    \"telegramnotifications\": \"telegramnotificationsValue\",
    \"email2\": \"email2Value\"
}"

curl -X PUT "https://my.photuesoftware.vn/api/contact/@id" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response

```json
{
    "info": [
        "profile_updated"
    ]
}
```