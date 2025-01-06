import { axiosAuth, axiosNoAuth } from '@/api/axios';
import { API_ENDPOINTS } from '@/api/endpoints';

export interface IAuthFormData {
  username: string;
  password: string;
  name?: string;
}

class AuthService {
  async login(data: IAuthFormData) {
    const formData: URLSearchParams = new URLSearchParams();
    formData.append('username', data.username);
    formData.append('password', data.password);
    const response = await axiosNoAuth.post(API_ENDPOINTS.LOGIN, formData);
    return response;
  }

  async register(data: IAuthFormData) {
    const rdata = {
      username: data.username,
      password: data.password,
      name: data.name,
    };

    return axiosNoAuth.post(API_ENDPOINTS.REGISTER, rdata);
  }

  async logout() {
    return axiosAuth.post(API_ENDPOINTS.LOGOUT);
  }
  async refresh() {
    return axiosAuth.post(API_ENDPOINTS.REFRESH);
  }
  async profile() {
    return axiosAuth.get(API_ENDPOINTS.PROFILE);
  }
}
export const authService = new AuthService();
