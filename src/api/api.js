import axios, * as others from 'axios';

const baseurl = "https://cors-anywhere-qk47.onrender.com/https://events-staging.tech231apps.net";

//creating customer
export const createCustomer = async (customer) => {
    return await axios.post(baseurl + '/api/v1/customers', customer, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.REACT_APP_APIKEY
    }
  }
)
}

//validating customer
export const getCustomer = async (phone) =>{
  return await axios.get(baseurl + '/api/v1/customers/'+ phone, {
    headers: {
      'X-API-KEY': process.env.REACT_APP_APIKEY,
      'Host': baseurl
    }
  }
)
}

export const makePurchase = async (purchase) => {
  return await axios.post(baseurl + '/api/v1/bookings/purchase', purchase, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.REACT_APP_APIKEY
    }
  }
)
}