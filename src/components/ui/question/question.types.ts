export enum ChoicesEnum {
  A = '1',
  B = '2',
  C = '3',
  D = '4',
}
export enum LevelEnum {
  Easy = '1',
  Medium = '2',
  Advanced = '3',
  Expert = '4',
}

export interface IQuestionItemNoAnswer {
  id: string;
  question: string;
  choices: Record<ChoicesEnum, string>;
  subject: string;
  submit_answer: string;
  level: Record<LevelEnum, string>;
  hash: string;
}
export interface IQuestionItemAnswered {
  id: string;
  question: string;
  choices: Record<ChoicesEnum, string>;
  subject: string;
  answer: ChoicesEnum;
  level: Record<LevelEnum, string>;
  hash: string;
}
