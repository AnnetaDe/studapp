import type { ITestRequest, ITestResponse, ITestSubmit } from '@/ui/testGenerated/test.types';
import { axiosAuth } from '@/api/axios';
import type { AxiosResponse } from 'axios';
import { axiosNoAuth } from '../api/axios';

class TestService {
	async generateTest(data: ITestRequest): Promise<AxiosResponse> {
		const response = axiosNoAuth({
			url: '/test/generate',
			method: 'post',
			data: data,
		});
		return response;
	}

	submit_answers(data: ITestSubmit): Promise<AxiosResponse> {
		const response = axiosNoAuth({
			url: '/test/submit',
			method: 'post',
			data: data,
		});
		return response;
	}
	history(params: { user_id: string }) {
		const response = axiosNoAuth({
			url: '/test/history',
			method: 'get',
			params: params,
		});
		return response;
	}
	performance(userId: string) {
		const response = axiosNoAuth({
			url: '/test/performance',
			method: 'get',
			params: { user_id: userId },
		});
		return response;
	}

	getTestById(test_id: string) {
		const response = axiosAuth({
			url: '/test/onetest',
			method: 'get',
			params: { test_id: test_id },
		});
		return response;
	}
}

export const testService = new TestService();
