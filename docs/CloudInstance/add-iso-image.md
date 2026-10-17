---
id: add-iso-image
title: Thêm ảnh ISO
---

## Thêm ảnh ISO

Thêm ảnh ISO tùy chỉnh vào dịch vụ.

### Yêu cầu HTTP

`POST /service/@id/images`

### Tham số truy vấn

| Tham số | Kiểu | Mô tả |
|------------------|--------|--------------------------------------|
| id | int | ID dịch vụ |
| label | string | Nhãn của ảnh ISO |
| file_url | string | URL của tệp ISO |
| min_memory | int | Dung lượng bộ nhớ tối thiểu (MB) |
| version | string | Số phiên bản |
| os | string | Loại hệ điều hành (ví dụ: Windows, Linux) |
| distro | string | Tên bản phân phối |
| virtualization | array | Các loại ảo hóa được hỗ trợ |

### Yêu cầu mẫu

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