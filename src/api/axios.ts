import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

enum EnumTokens {
	ACCESS_TOKEN = 'access_token',
	REFRESH_TOKEN = 'refresh_token',
}

const axiosAuthOptions: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
	},
};

const axiosOptions: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const axiosNoAuth = axios.create(axiosOptions);
export const axiosAuth = axios.create(axiosAuthOptions);

// axiosNoAuth.interceptors.request.use(config => {
// 	console.log('request', config);
// 	return config;
// });
// axiosNoAuth.interceptors.response.use(async response => {
// 	console.log('response', response);

// 	const authorization = response.headers['authorization'];
// 	const cook = response.headers['set-cookie'];
// 	console.log('authorization', authorization, cook);

// 	return response;
// });

// axiosNoAuth.interceptors.request.use(config => {
// 	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);

// 	if (config.headers && accessToken) {
// 		config.headers.Authorization = `Bearer ${accessToken}`;
// 	}

// 	return config;
// });

// const saveTokenStorage = (accessToken: string) => {
// 	Cookies.set('access_token', accessToken, {
// 		domain: '192.168.1.73:3000',
// 		expires: 1 / 24,
// 		sameSite: 'none',
// 		secure: true,
// 	});
// };

// const removeFromStorage = () => {
// 	Cookies.remove('access_token');
// };
// axiosAuth.interceptors.request.use(
// 	async config => {
// 		let token = Cookies.get('access_token');
// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	}
// );
// axiosAuth.interceptors.response.use(
// 	config => config,
// 	async error => {
// 		const originalRequest = error.config;
// 		if (error.response?.status === 401 && !originalRequest._retry) {
// 			originalRequest._retry = true;
// 			try {
// 				const response = await axiosNoAuth.post('/auth/refresh');
// 				const token = response.data.access_token;
// 				Cookies.set('access_token', token);
// 				return axiosNoAuth(originalRequest);
// 			} catch (error) {
// 				console.log('Error refreshing token:', error);
// 			}
// 		}
// 		return Promise.reject(error);
// 	}
// );
