import type { IQuestionItemNoAnswer } from './question.types';
import React from 'react';

interface Props {
  item: IQuestionItemNoAnswer;
  checked_answer: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QuestionItemNoAnswer({ item, checked_answer, handleChange }: Props) {
  return (
    <li>
      <p>{item.question}</p>
      {Object.entries(item.choices).map(([key, value]) => (
        <label key={key}>
          <input
            type="radio"
            name={`choice-${key}`}
            checked={checked_answer}
            onChange={handleChange}
          />
          {value}
        </label>
      ))}
    </li>
  );
}
