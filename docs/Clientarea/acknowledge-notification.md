---
id: acknowledge-notification
title: Xác nhận đã đọc thông báo
---

## Xác nhận đã đọc thông báo

Đánh dấu một thông báo là đã đọc.

### Yêu cầu HTTP

`PUT /notifications/@id/ack`

### Yêu cầu mẫu

```bash
curl -X PUT "https://my.photuesoftware.vn/api/notifications/@id/ack" \
   -H "Authorization: Bearer $token"
```