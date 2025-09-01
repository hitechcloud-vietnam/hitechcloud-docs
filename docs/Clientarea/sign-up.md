# Sign Up

Create a new account.

### HTTP Request
```
POST /signup
```

### Query Parameters
| Parameter         | Type   | Description                  |
|-------------------|--------|------------------------------|
| type              | string | Account Type (Private, Company) |
| companyname       | string | Organization (Required for organization account) |
| taxid             | string | Tax ID (Required for organization account) |
| gender            | string | Gender (Nam, Nữ) |
| lastname          | string | Last Name |
| firstname         | string | First Name |
| nationalid        | string | National ID |
| email             | string | Email Address |
| birthday          | string | Birthday |
| phonenumber       | string | Phone |
| country           | string | Country |
| state             | string | State |
| city              | string | City |
| address1          | string | Address 1 |
| password          | string | Password |
| postcode          | string | Postcode |
| managementagency  | string | Tax Management Agency |
| email2            | string | Secondary Email |
| currency          | string | Currency (e.g., VND, USD, EUR) |

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
    \"password\": \"passwordValue\",
    \"postcode\": \"postcodeValue\",
    \"managementagency\": \"managementagencyValue\",
    \"email2\": \"email2Value\",
    \"currency\": \"currencyValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/signup" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```

### Example Response
```json
{
    "info": [
        "client_registered"
    ]
}
```
