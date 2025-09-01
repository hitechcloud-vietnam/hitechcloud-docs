---
id: get-city-by-state-name
title: Get City by State Name
---

## Get City by State Name

Retrieve cities for a state matching the given name.

### HTTP Request

`GET /location_v2/state/city/@name`

### Query Parameters

| Parameter | Type   | Description  |
|-----------|--------|--------------|
| name      | string | State name   |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/location_v2/state/city/@name"
```