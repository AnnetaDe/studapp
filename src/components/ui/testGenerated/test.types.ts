import type { IQuestionItemNoAnswer } from '../question/question.types';

export interface ITestResponse {
  test_id: string;
  level:LevelEnum;
  subject: string;
  tests: IQuestionItemNoAnswer[];
  count:number
}

export enum LevelEnum {
  EASY = 1,
  MEDIUM = 2,
  INTERMEDIATE = 3,
  DIFFICULT = 4,
}

export interface ITestRequest {
  level: LevelEnum;
  subject: string;
  count: number;
}