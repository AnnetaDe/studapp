import { axiosAuth, axiosNoAuth } from '@/api/axios';
import { API_ENDPOINTS } from '@/api/endpoints';
import type { AxiosResponse } from 'axios';
import axios from 'axios';

export interface IAuthFormData {
	username: string;
	password: string;
	name?: string;
}

class AuthService {
	async login(data: IAuthFormData): Promise<AxiosResponse | null> {
		try {
			const formData: URLSearchParams = new URLSearchParams();
			formData.append('username', data.username);
			formData.append('password', data.password);
			const response = await axiosNoAuth.post(API_ENDPOINTS.LOGIN, formData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				withCredentials: true,
			});

			return response;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response?.status === 401) {
				console.log('Login error', error);
				return null;
			}

			throw error;
		}
	}

	async register(data: IAuthFormData): Promise<AxiosResponse | null> {
		try {
			const rdata = {
				username: data.username,
				password: data.password,
				name: data.name,
			};
			return axiosNoAuth.post(API_ENDPOINTS.REGISTER, rdata);
		} catch (error) {
			console.error('Error fetching register:', error);
			throw error;
		}
	}

	async logout() {
		return axiosAuth.post(API_ENDPOINTS.LOGOUT);
	}
	async refresh() {
		try {
			const response = await axiosAuth.post(API_ENDPOINTS.REFRESH, null, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			return response;
		} catch (error) {
			throw error;
		}
	}
	// async profile() {
	// 	try {
	// 		const response = await axiosNoAuth.get(API_ENDPOINTS.PROFILE, {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			withCredentials: true,
	// 		});
	// 		return response.data;
	// 	} catch (error) {
	// 		if (axios.isAxiosError(error) && error.response?.status === 401) {
	// 			console.log('Profile', error);
	// 			return null;
	// 		}
	// 		throw error;
	// 	}
	// }
}

export const authService = new AuthService();
				
