import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';



const axiosAuthOptions: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const axiosOptions: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const axiosNoAuth = axios.create(axiosOptions);
export const axiosAuth = axios.create(axiosAuthOptions);
