import type { IQuestionItemNoAnswer } from '../question/question.types';

export interface ITestResponse {
  test_id: string;
  level: string;
  status: string;
  subject: string;
  tests: IQuestionItemNoAnswer[];
  completed: boolean;
  count:string
}
