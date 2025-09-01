---
id: acknowledge-notification
title: Acknowledge Notification
---

## Acknowledge Notification

Mark a notification as read.

### HTTP Request

`PUT /notifications/@id/ack`

### Example Request

```bash
curl -X PUT "https://my.photuesoftware.vn/api/notifications/@id/ack" \
   -H "Authorization: Bearer $token"
```