export enum ChoicesEnum {
  A = '1',
  B = '2',
  C = '3',
  D = '4',
}


export interface IQuestionItemNoAnswer {
  question: string;
  choices: Record<ChoicesEnum, string>;
  submit_answer: string;
}
export interface IQuestionItemAnswered {
  question: string;
  choices: Record<ChoicesEnum, string>;
  subject: string;
  answer: ChoicesEnum;
}
