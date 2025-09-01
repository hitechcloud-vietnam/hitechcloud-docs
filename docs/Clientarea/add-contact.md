# Add Contact

Create a new contact account. If a password is provided, you can use the provided email address to log in as that contact.
### HTTP Request
```
POST /contact
```

### Query Parameters
| Parameter              | Type   | Description                  |
|------------------------|--------|------------------------------|
| password               | string | Optional, allows you to log in as contact |
| privileges             | array  | Array with privileges to enable |
| type                   | string | Account Type (Private, Company) |
| companyname            | string | Organization |
| taxid                  | string | Tax ID |
| gender                 | string | Gender (Nam, Nữ) |
| lastname               | string | Last Name |
| firstname              | string | First Name |
| nationalid             | string | National ID |
| email                  | string | Email Address |
| birthday               | string | Birthday |
| phonenumber            | string | Phone |
| country                | string | Country |
| state                  | string | State |
| city                   | string | City |
| address1               | string | Address 1 |
| postcode               | string | Postcode |
| managementagency       | string | Tax Management Agency |
| telegramnotifications  | string | Telegram notifications |
| email2                 | string | Secondary Email |

```bash
POST_DATA="{
    \"password\": \"passwordValue\",
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

curl -X POST "https://my.photuesoftware.vn/api/contact" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "contact_id": "1",
    "info": [
        "profile_added"
    ]
}
```

