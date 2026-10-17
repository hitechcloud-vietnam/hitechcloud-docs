# Tải lên tài liệu đã ký

Tải lên tài liệu đã ký.
## Yêu cầu HTTP

```POST /domain/@id/documents/@documentid/upload```

**Auth**: false

## QUERY PARAMETERS

|Parameter|Type|Description|
|---|---|---|
|id|int|Domain ID|
|documentid|int|Document ID|
|filename|string|File name, for example: myfile.pdf|
|content|string|File content, must be base64 encoded content.|