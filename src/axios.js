import axios from 'axios';

export const makeRequest = axios.create({
  // baseURL: 'http://localhost:8800/api',
  baseURL: 'https://kind-puce-chick-garb.cyclic.app/api',
  withCredentials: true,
});
