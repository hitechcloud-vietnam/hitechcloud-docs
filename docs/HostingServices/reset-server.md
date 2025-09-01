---
id: reset-server
title: Reset Server
---

## Reset Server

Reset a server to its default state.

### HTTP Request

`POST /service/@id/reset`

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id        | int  | Service ID  |

### Example Request

```bash
POST_DATA="{
    \"id\": \"idValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/reset" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```