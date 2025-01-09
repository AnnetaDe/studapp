'use client';
import QuestionItemNoAnswer from '../question/QuestionItem';
import type { IQuestionItemNoAnswer } from '../question/question.types';
import { LevelEnum, type ITestResponse, type ITestSubmit } from './test.types';
import { useForm, Controller } from "react-hook-form";

import React from 'react';
import { useUserContext } from '@/app/UserProvider';


interface FormData {
  test_id: string;
  selected_answers: number[];
  user_id?: string;
}

interface Props {
  data: ITestResponse | null;
  submit: (data: FormData) => void;
  user_id?: string;

  }


function TestGenerated({ data, submit, user_id }: Props) {
  console.log(data);
  const user = useUserContext();

  
  if (!data) {
    return null;
  }

  const { handleSubmit, control, reset } = useForm();
   const onSubmit = (formData: Record<string, string | number>) => {
    const submissionData = {
      test_id: data.test_id,
      selected_answers: Object.values(formData).map(Number),
      user_id:user_id
     };
      submit(submissionData);
     console.log(submissionData);
     
  };
 

  const levelLabels: { [key in LevelEnum]: string } = {
    [LevelEnum.EASY]: "EASY",
    [LevelEnum.MEDIUM]: "MEDIUM",
    [LevelEnum.INTERMEDIATE]: "INTERMEDIATE",
    [LevelEnum.DIFFICULT]: "DIFFICULT",
  };
  const levelLabel = levelLabels[data.level as LevelEnum];

  return (
    <form className="test-generated  max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
    onSubmit={handleSubmit(onSubmit)}>
      <div className='p-6'>
        <h3>SUBJECT: {data.subject}</h3>
        <span className='p-1 border rounded-sm'>{levelLabel}</span>
      </div>
      <ol>
        {data.test_data.map((test: IQuestionItemNoAnswer, idx: number) => {
          return (
            <Controller
              name={`question-${idx}`}
              control={control}
              defaultValue={""}
                render={({field}) => (
                  <QuestionItemNoAnswer
                    key={`${data.test_id}-q${idx}`}
                    item={test}
                    question_index={idx}
                    handleChange={field.onChange}
                    selectedValue={Number(field.value)}
                  />
                )}
                key={`${data.test_id}-controller-${idx}`}
              />
          );
        })}
      </ol>
      <div className="p-6">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default TestGenerated;