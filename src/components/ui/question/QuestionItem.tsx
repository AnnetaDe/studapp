import type { IQuestionItemNoAnswer } from './question.types';
import React from 'react';

interface Props {
  item: IQuestionItemNoAnswer;
}

export default function QuestionItemNoAnswer({ item }: Props) {
  return (
    <li>
      <div>{item.question}</div>
    </li>
  );
}
