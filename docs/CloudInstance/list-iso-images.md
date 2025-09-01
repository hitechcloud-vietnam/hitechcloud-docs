---
id: list-iso-images
title: List ISO Images
---

## List ISO Images

Retrieve a list of ISO images that can be attached to virtual servers.

### HTTP Request

`GET /service/@id/images`

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/images" \
   -H "Authorization: Bearer $token"
```