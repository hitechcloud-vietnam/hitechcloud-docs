---
id: add-iso-image
title: Add ISO Image
---

## Add ISO Image

Add a custom ISO image to the service.

### HTTP Request

`POST /service/@id/images`

### Query Parameters

| Parameter        | Type   | Description                          |
|------------------|--------|--------------------------------------|
| id               | int    | Service ID                          |
| label            | string | Label for the ISO image             |
| file_url         | string | URL pointing to the ISO file        |
| min_memory       | int    | Minimum memory size in MB           |
| version          | string | Version number                      |
| os               | string | OS type (e.g., Windows, Linux)      |
| distro           | string | Distribution name                   |
| virtualization   | array  | Supported virtualization types      |

### Example Request

```bash
POST_DATA="{
    \"label\": \"labelValue\",
    \"file_url\": \"file_urlValue\",
    \"min_memory\": \"min_memoryValue\",
    \"version\": \"versionValue\",
    \"os\": \"osValue\",
    \"distro\": \"distroValue\",
    \"virtualization\": \"virtualizationValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/images" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```