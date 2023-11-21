export const customer = {
    "firstName": "",
    "lastName": "",
    "phoneNumber": ""
    }

export const purchase = { 
    "customerId": "c7fe6c0d-a028-3abd-8e96-b311aeb9eedc",//get from customer endpoint
    "eventId": "9c483b37-1259-4071-9927-24e0c8d7a7d8",//get from db
    "ticketType": {
    "id": 55,//get from db
    "name": "example"//get from db
    },
    "ticketCount": 0,
    "payment": {
    "payee": "",//FROM buy for others
    "amount": 0,//based on on number of tickets entered
    "currency": "USD",
    "narration": "Ticket purchased for MLMA event",
    "appliedDiscount": 0.0,
    "appliedDiscountType": ""
    }
    }

export const ticketsAvailable = [
    {
      "type": {
        "name": "VIP",
        "id": 2
      },
      "count": 100,
      "costPerTicket": 50,
      "maxPerCustomer": 3,
      "prefix": "MLMV23",
      "active": true,
      "costCurrency": "USD",
      "order": 1
    },
    {
      "type": {
        "name": "Special",
        "id": 3
      },
      "count": 300,
      "costPerTicket": 0,
      "maxPerCustomer": 1,
      "prefix": "MLMS23",
      "active": false,
      "costCurrency": "USD",
      "order": 0
    },
    {
      "type": {
        "name": "Standard",
        "id": 6
      },
      "count": 300,
      "costPerTicket": 25,
      "maxPerCustomer": 3,
      "prefix": "MLMA23",
      "active": true,
      "costCurrency": "USD",
      "order": 0
    }
  ]