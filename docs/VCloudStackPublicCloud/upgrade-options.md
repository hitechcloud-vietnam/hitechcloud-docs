id: upgrade-options
title: Upgrade Options
---

## Upgrade Options

List resource upgrade options for a service.

### HTTP Request

`GET /service/@id/upgrade`

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token"
```