---
id: reinstall-server
title: Reinstall Server
---

## Reinstall Server

Reinstall a server with specified options.

### HTTP Request

`POST /service/@id/reinstall`

### Query Parameters

| Parameter         | Type   | Description |
|-------------------|--------|-------------|
| id                | int    | Service ID  |
| profile           | int    | Profile ID  |
| rootpassword      | string | Root password |
| adminuser         | string | Admin username |
| userpassword      | string | User password |
| packageselection  | string | Package selection |
| extra1            | string | Additional options |

### Example Request

```bash
POST_DATA="{
    \"id\": \"idValue\",
    \"profile\": \"profileValue\",
    \"rootpassword\": \"rootpasswordValue\",
    \"adminuser\": \"adminuserValue\",
    \"userpassword\": \"userpasswordValue\",
    \"packageselection\": \"packageselectionValue\",
    \"extra1\": \"extra1Value\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/reinstall" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```