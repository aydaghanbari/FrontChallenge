import axios from 'axios';
export const axiosReq = axios.create({
  baseURL:
    'https://cors-anywhere.herokuapp.com/https://restapi.adequateshop.com',
});
