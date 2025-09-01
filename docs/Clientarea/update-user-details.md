# Update User Details

Update registration details under my account.

### HTTP Request
```
PUT /details
```

### Query Parameters
| Parameter              | Type   | Description                  |
|------------------------|--------|------------------------------|
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

curl -X PUT "https://my.photuesoftware.vn/api/details" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "client": {
        "id": "26",
        "email": "api@example.com",
        "lastlogin": "2016-12-30 12:34:20",
        "ip": "172.100.2.1",
        "host": "hostname",
        "firstname": "Joe",
        "lastname": "Doe",
        "companyname": "",
        "address1": "Pretty View Lane",
        "address2": "3194",
        "city": "Santa Rosa",
        "state": "California",
        "postcode": "95401",
        "country": "US",
        "phonenumber": "+1.24123123"
    },
    "info": [
        "client_info_updated"
    ]
}
```

