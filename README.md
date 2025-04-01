## Curl command to test

```
curl --location 'http://localhost:3000/requests' \
--header 'Content-Type: application/json' \
--data '{
    "level": "l1",
    "type": "t1",
    "action": "a1",
    "data": {
      "customerId": "CUST12345",
      "quantity": 10
    }
  }'
```
