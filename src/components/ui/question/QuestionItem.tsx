import type { IQuestionItemNoAnswer } from './question.types';
import React from 'react';

interface Props {
  item: IQuestionItemNoAnswer;
  // checked_answer: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  question_index: number;
  selectedValue: number;
}

export default function QuestionItemNoAnswer({
  item,
  handleChange,
  question_index,
  selectedValue,
}: Props) {
  return (
    <li className="w-50 outline p-6 bg-white">
      <div className="divide-y divide-gray-200">
        <div className="flex-wrap">
          <p>{item.question}</p>
        </div>
        {Object.entries(item.choices).map(([key, value]) => (
          <label
            key={`${question_index}-${key}`}
            htmlFor={`choice-${question_index}-${key}`}
            className=" flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-3 transition hover:bg-gray-50 has-[:checked]:bg-indigo-300 mb-3"
          >
            <div className="flex items-center">
              &#8203;
              <input
                className=" size-4 rounded border-gray-300"
                type="checkbox"
                value={Number(key)}
                onChange={handleChange}
                id={`choice-${question_index}-${key}`}
                checked={selectedValue === Number(key)}
              />
            </div>
            <span className="flex-wrap">
              <p className="text-pretty text-gray-700">{value}</p>
            </span>
          </label>
        ))}
      </div>
    </li>
  );
}

