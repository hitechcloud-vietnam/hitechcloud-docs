---
id: update-status
title: Update Status
---

## Update Status

Update a specific status.

### HTTP Request

`PUT /statuses/@id`

### Query Parameters

| Parameter | Type | Description  |
|-----------|------|--------------|
| id        | int  | Status ID    |

### Example Request

```bash
curl -X PUT "https://my.photuesoftware.vn/api/statuses/@id" \
   -H "Authorization: Bearer $token"
```