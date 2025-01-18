import { axiosNoAuth } from '@/api/axios';
import { API_ENDPOINTS } from '@/api/endpoints';
import axios from 'axios';

class UserService {
	async profile() {
		try {
			const response = await axiosNoAuth.get(API_ENDPOINTS.PROFILE, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response?.status === 401) {
				console.log('Profile', error);
				return null;
			}
			throw error;
		}
	}
	async performance() {
		try {
			const response = await axiosNoAuth.get(API_ENDPOINTS.PERFORMANCE, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			return response;
		} catch (error: any) {
			if (axios.isAxiosError(error) && error.response?.status === 401) {
				console.log('Performance', error);
				return null;
			}
			throw error;
		}
	}
}

export const userService = new UserService();
