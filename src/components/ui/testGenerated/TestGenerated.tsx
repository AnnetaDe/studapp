'use client';
import QuestionItemNoAnswer from '../question/QuestionItem';
import type { IQuestionItemNoAnswer } from '../question/question.types';
import type { ITestResponse } from './test.types';
import React from 'react';

interface Props {
  data: ITestResponse;
}

export default function TestGenerated({ data }: Props) {
  const handleChange = () => {
    console.log('change');
  };
  const checked = () => {
    return false;
  };

  return (
    <div className="test-generated col-span-3 row-span-1 max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <h3>{data.subject}</h3>
      <p>{data.level}</p>
      <ol>
        {data.tests.map((test: IQuestionItemNoAnswer, idx: number) => {
          return (
            <QuestionItemNoAnswer
              key={`${data.test_id}-q${idx}`}
              item={test}
              question_index={idx}
              // checked_answer={checked()}
              handleChange={handleChange}
            />
          );
        })}
      </ol>
    </div>
  );
}
