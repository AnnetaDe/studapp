import type { ITestRequest, ITestResponse } from '@/ui/testGenerated/test.types';
import { axiosAuth } from '@/api/axios';

class TestService {
  generateTest(data: ITestRequest): Promise<ITestResponse> {
    return axiosAuth({
      url: '/test/generate',
      method: 'post',
      data: data,
    });
  }
}

export const testService = new TestService();
