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
    <div>
      <p>{data.subject}</p>
      <p>{data.level}</p>
      {data.tests.map((test: IQuestionItemNoAnswer, idx: number) => {
        return (
          <QuestionItemNoAnswer
            key={`${data.test_id}-q${idx}`}
            item={test}
            // checked_answer={checked()}
            handleChange={handleChange}
          />
        );
      })}
    </div>
  );
}
