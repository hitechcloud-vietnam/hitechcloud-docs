# Cấu hình

HiTechCloud cung cấp **HTTP REST API** cho phép quản lý các chi tiết quan trọng của tài khoản và dịch vụ trên cổng khách hàng. API sử dụng **JSON** cho tất cả các phản hồi.

## Các dịch vụ hỗ trợ qua API
- Phát triển Modules / Addons / Plugins / Themes
- Cung cấp máy chủ - VPS - Cloud - Hosting chất lượng cao
- Cung cấp máy chủ NVIDI GPU - AI& LLM
- Domains Brandname
- Domain .VN (ccTLD) và Quốc tế (gTLD)
- Và hơn 55+ Giải pháp và Dịch vụ khác


## Xác thực
Hỗ trợ hai phương thức xác thực:

### 1. Xác thực bằng JSON Web Token (JWT)
```bash
# Lấy token xác thực
curl 'https://my.photuesoftware.vn/api/login' \
    -d username="username" \
    -d password="password"

# Sử dụng token trong header Authorization
curl 'https://my.photuesoftware.vn/api/details' \
    -H "Authorization: Bearer $token"
```

**Ví dụ (PHP - Guzzle):**
```php
use GuzzleHttp\Client;

$client = new Client(['base_uri' => 'https://my.photuesoftware.vn/api/']);
$resp = $client->post('login', [
    'form_params' => [
        'username' => 'username',
        'password' => 'password'
    ]
]);

$token = $resp->json()['token'];

$resp = $client->get('details', [
    'headers' => [
        'Authorization' => 'Bearer ' . $token
    ]
]);

echo $resp->getBody();
```

**Ví dụ (Python - Requests):**
```python
import requests

payload = {'username': 'username', 'password': 'password'}
resp = requests.post('https://my.photuesoftware.vn/api/login', data=payload)

headers = {
    'Authorization': 'Bearer ' + resp.json()['token']
}
resp = requests.get('https://my.photuesoftware.vn/api/details', headers=headers)
print(resp)
```

### 2. Basic Authentication
```bash
curl 'https://my.photuesoftware.vn/api/details' \
    -u "username:password"
```

**Ví dụ (PHP - Guzzle):**
```php
use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'https://my.photuesoftware.vn/api/',
    'auth' => ['username', 'password']
]);

$resp = $client->get('details');
echo $resp->getBody();
```

**Ví dụ (Python - Requests):**
```python
import requests

req = requests.get('https://my.photuesoftware.vn/api/details', auth=('username', 'password'))
print(req.json())
```

> **Lưu ý:** Thay `username` và `password` bằng thông tin tài khoản của bạn.

## Tài liệu Swagger
Tài liệu API có thể được tải xuống hoặc hiển thị dưới dạng JSON để tạo tài liệu trong **Swagger**.