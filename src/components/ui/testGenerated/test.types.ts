import type { IQuestionItemNoAnswer } from '../question/question.types';

export interface ITestResponse {
  test_id: string;
  level: string;
  status: string;
  subject: string;
  tests: IQuestionItemNoAnswer[];
  completed: boolean;
  count:number
}

export enum LevelEnum {
  Easy = '1',
  Medium = '2',
  Advanced = '3',
  Expert = '4',
}