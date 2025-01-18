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
<<<<<<< HEAD
=======

// axiosNoAuth.interceptors.response.use(async response => {
// 	console.log('response', response);
// 	const authorization = response.headers['authorization'];
// 	console.log('authorization', authorization);
// 	return response;
// });

	

// axiosNoAuth.interceptors.request.use(
// 	config => config,
// 	async error => {
// 		const originalReq = error.config;
// 		if (error.response?.status === 401 && !originalReq._retry) {
// 			originalReq._retry = true;
// 			try {
// 				const response = await axiosNoAuth.post('/auth/refresh', null, {
// 					withCredentials: true,
// 				});
// 				return response;
// 			} catch (error) {
// 				console.log('Error refreshing token:', error);
// 				throw new Error('Error refreshing token');
// 			}
// 		}
// 		return Promise.reject(error);
// 	}
// );
>>>>>>> parent of 0ad45bb (Revert "login")
