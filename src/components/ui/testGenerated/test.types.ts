import type { IQuestionItemNoAnswer } from '../question/question.types';

export interface ITestResponse {
  test_id: string;
  level: LevelEnum;
  subject: string;
  test_data: IQuestionItemNoAnswer[];
  count: number;
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

export interface ITestSubmit {
  test_id: string;
  selected_answers: number[];
  user_id: string;
}

export interface SubmitReturn {
  message: string;
  status: Record<string, any>;
}

export interface ResponseSubmit {
  message: string;
  status: Record<string, any>;
}
