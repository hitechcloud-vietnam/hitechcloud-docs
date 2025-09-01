---
id: list-os-templates
title: List OS Templates
---

## List OS Templates

Retrieve a list of templates that can be used to create virtual servers.

### HTTP Request

`GET /service/@id/templates`

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/templates" \
   -H "Authorization: Bearer $token"
```