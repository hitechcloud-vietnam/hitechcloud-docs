---
id: get-city
title: Get City
---

## Get City

Retrieve cities for a given state ID.

### HTTP Request

`GET /location_v2/state/@id/city`

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | State ID    |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/location_v2/state/@id/city"
```