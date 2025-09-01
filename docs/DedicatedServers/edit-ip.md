# Edit IP

Update the domain of an IP.


### HTTP Request
```
POST /service/@id/ips/@ip
```

### Query Parameters
| Parameter | Type   | Description         |
|-----------|--------|---------------------|
| id        | int    | Service ID          |
| ip        | string | IP Address ID       |
| domain    | string | Domain name         |

```bash
POST_DATA="{
    \"domain\": \"domainValue\"
}"

curl -X POST "https://my.photuesoftware.vn/api/service/@id/ips/@ip" \
   -H "Authorization: Bearer $token" \
   -H "Content-Type: application/json" \
   -d "${POST_DATA}"
```
