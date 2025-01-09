import type { ITestRequest, ITestResponse, ITestSubmit } from '@/ui/testGenerated/test.types';
import { axiosAuth } from '@/api/axios';
import type { AxiosResponse } from 'axios';

class TestService {
  async generateTest(data: ITestRequest): Promise<AxiosResponse> {
    const response = axiosAuth({
      url: '/test/generate',
      method: 'post',
      data: data,
    });
    return response;
  }

  submit_answers(data: ITestSubmit): Promise<AxiosResponse> {
    const response = axiosAuth({
      url: '/test/submit-answers',
      method: 'post',
      data: data,
    });
    return response;
  }
  history(params: { user_id: string }) {
    const response = axiosAuth({
      url: '/test/history',
      method: 'get',
      params: params,
    });
    return response;
  }
  performance(userId: string) {
    const response = axiosAuth({
      url: '/test/performance',
      method: 'get',
      params: { user_id: userId },
    });
    return response;
  }
}

export const testService = new TestService();
