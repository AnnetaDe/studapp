// 'use server';
// import { API_URL } from '@/constants/main.constants';
// import type { NextRequest } from 'next/server';

// interface IUser {
// 	_id: string;
// 	username: string;
// 	name: string;
// }
// interface IAuthResponse {
// 	user: IUser;
// 	accessToken: string;
// }
// enum EnumTokens {
// 	ACCESS_TOKEN = 'access_token',
// 	REFRESH_TOKEN = 'refresh_token',
// }

// export async function getTokensFromRequest(request: NextRequest) {
// 	const allCookies = request.cookies.getAll();
// 	console.log('allCookies', allCookies);
// 	let accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
// 	let refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

// 	if (!refreshToken) {
// 		request.cookies.delete(EnumTokens.ACCESS_TOKEN);
// 		return null;
// 	}

// 	if (!accessToken) {
// 		try {
// 			const data = await getNewTokensByRefresh(refreshToken);
// 			accessToken = data.accessToken;
// 		} catch (error) {
// 			if (error instanceof Error) {
// 				if (error.message === 'invalid token') {
// 					console.log('invalid token');
// 					request.cookies.delete(EnumTokens.ACCESS_TOKEN);
// 					return null;
// 				}
// 			}
// 			return null;
// 		}
// 	}

// 	return { accessToken, refreshToken };
// }

// export async function getNewTokensByRefresh(refreshToken: string) {
// 	const response = await fetch(`${API_URL}/auth/refresh`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Cookie: `refreshToken=${refreshToken}`,
// 		},
// 		credentials: 'include',
// 	});

// 	if (!response.ok) {
// 		throw new Error('Failed to fetch new tokens');
// 	}

// 	const data: IAuthResponse = await response.json();
// 	return data;
// }
