---
id: server-power-status
title: Server Power Status
---

## Server Power Status

Retrieve the power status of a server.

### HTTP Request

`GET /service/@id/status`

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

### Example Request

```bash
curl -X GET "https://my.photuesoftware.vn/api/service/@id/status"
```