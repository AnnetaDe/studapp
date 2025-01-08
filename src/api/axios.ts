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

let isRefreshing = false;
let failedQueue: any = [];
const processQueue = (error: any, token: string | null | undefined = null) => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};
axiosAuth.interceptors.request.use(
  config => {
    config.headers.set('Content-Type', 'application/json');
    config.headers.set('Accept', 'application/json');
    // config.headers.set('Access-Control-Allow-Origin');

    const xsrfToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('refresh_token='))
      ?.split('=')[1];
    if (xsrfToken) {
      config.headers['X-XSRF-TOKEN'] = xsrfToken;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axiosAuth.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return axiosAuth(originalRequest);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }
      originalRequest._retry = true;
      isRefreshing = true;
      try {
        const refreshToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('refresh_token='))
          ?.split('=')[1];

        const { data } = await axios.post('/auth/refresh', { refreshToken });
        const newAccessToken = data.access_token;
        const newRefreshToken = data.refresh_token;
        document.cookie = `access_token=${newAccessToken}; path=/;`;
        document.cookie = `refresh_token=${newRefreshToken}; path=/;`;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;
        processQueue(null, newAccessToken);
        isRefreshing = false;

        return axiosAuth(originalRequest);
      } catch (err) {
        processQueue(err, null);
        isRefreshing = false;
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);


