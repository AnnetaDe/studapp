import { axiosAuth, axiosNoAuth } from '@/api/axios';
import { API_ENDPOINTS } from '@/api/endpoints';
import type { AxiosResponse } from 'axios';

export interface IAuthFormData {
	username: string;
	password: string;
	name?: string;
}

class AuthService {
	async login(data: IAuthFormData): Promise<AxiosResponse> {
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
			console.error('Error fetching login:', error);
			throw error;
		}
	}

	async register(data: IAuthFormData) {
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
	async profile() {
		try {
			const response = await axiosAuth.get(API_ENDPOINTS.PROFILE);
			return response.data;
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error fetching profile:', (error as any).response?.data || error.message);
			} else {
				console.error('Error fetching profile:', error);
			}
			throw error;
		}
	}
}

export const authService = new AuthService();
				
