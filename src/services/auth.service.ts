import { axiosAuth, axiosNoAuth } from '@/api/axios';
import { API_ENDPOINTS } from '@/api/endpoints';
import type { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';


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
      const response = await axiosNoAuth.post(API_ENDPOINTS.LOGIN, formData);
      console.log('response', response);
      const refresh_token = response.data.refresh_token;
      
      localStorage.setItem('refresh_token', refresh_token);

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
    
    localStorage.removeItem('refresh_token');
    
    
    return axiosAuth.post(API_ENDPOINTS.LOGOUT);
  }
  async refresh() {
    try {
      const refresh_token = localStorage.getItem('refresh_token');
      console.log('refresh_token', refresh_token);
      return axiosNoAuth.post(API_ENDPOINTS.REFRESH);
    } catch (error) {
      console.error('Error fetching refresh:', error);
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
