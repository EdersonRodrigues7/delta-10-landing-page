import axios from 'axios';

export const api = axios.create({
    baseURL: "https://mail-service-api.vercel.app/api"
  });