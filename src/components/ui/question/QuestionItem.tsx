import type { IQuestionItemNoAnswer } from './question.types';
import React from 'react';

interface Props {
  item: IQuestionItemNoAnswer;
  // checked_answer: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QuestionItemNoAnswer({ item, handleChange }: Props) {
  return (
    <li>
      <p>{item.question}</p>
      {Object.entries(item.choices).map(([key, value]) => (
        <label
          key={key}
          htmlFor={`choice-${key}`}
          className="-mx-4 flex cursor-pointer items-start gap-4 p-4 has-[:checked]:bg-blue-50"
        >
          <input
            className="size-4 rounded border-gray-300"
            type="checkbox"
            // checked={checked_answer}
            onChange={handleChange}
            id={`choice-${key}`}
          />
          {value}
        </label>
      ))}
    </li>
  );
}
