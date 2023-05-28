import axios from 'axios';

export const cineShareApi = axios.create({
  baseURL: '/api',
});
