---
id: upgrade-request
title: Upgrade Request
---

## Upgrade Request

Estimate or request resource upgrades for a service.

### HTTP Request

`POST /service/@id/upgrade`

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

### Example Request

```bash
curl -X POST "https://my.photuesoftware.vn/api/service/@id/upgrade" \
   -H "Authorization: Bearer $token"
```