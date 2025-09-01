# Remove DNS Zone

Deletes the selected DNS zone.

### HTTP Request
```
DELETE /service/@service_id/dns/@zone_id
```

### Query Parameters
| Parameter    | Type   | Description  |
|--------------|--------|--------------|
| service_id   | int    | Service ID   |
| zone_id      | int    | Zone ID      |

```bash
curl -X DELETE "https://my.photuesoftware.vn/api/service/@service_id/dns/@zone_id" \
   -H "Authorization: Bearer $token"
```

### Example Response
```json
{
   "info": [
     "Domain zone testzone.com was deleted successfully."
   ]
}
```
