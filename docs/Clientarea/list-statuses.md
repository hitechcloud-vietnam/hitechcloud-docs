---
id: list-statuses
title: List Statuses
---

## List Statuses

Retrieve a list of all statuses with specific status.

### HTTP Request

`GET /statuses`

### Query Parameters

| Parameter | Type   | Description                          |
|-----------|--------|--------------------------------------|
| status    | string | Returns details of status            |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/statuses" \
   -H "Authorization: Bearer $token"
```