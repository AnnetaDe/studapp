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