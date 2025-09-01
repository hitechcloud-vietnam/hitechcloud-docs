# Upload signed document

Upload signed document.
## HTTP Request

```POST /domain/@id/documents/@documentid/upload```

**Auth**: false

## QUERY PARAMETERS

|Parameter|Type|Description|
|---|---|---|
|id|int|Domain ID|
|documentid|int|Document ID|
|filename|string|File name, for example: myfile.pdf|
|content|string|File content, must be base64 encoded content.|