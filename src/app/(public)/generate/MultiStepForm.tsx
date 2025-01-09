'use client'
import { useUserContext } from '@/app/UserProvider';
import { testService } from '@/services/test.service';
import { Button } from '@/ui/Button/Button';
import type FormGenerate from '@/ui/formGenerate/FormGenerate';
import SelectLevel from '@/ui/formGenerate/SelectLevel';
import type { IQuestionItemNoAnswer as OriginalIQuestionItemNoAnswer } from '@/ui/question/question.types';

interface IQuestionItemNoAnswer extends OriginalIQuestionItemNoAnswer {
  id: string;
  selected_answer?: number;
}

// Removed duplicate interface declaration
import QuestionItemNoAnswer from '@/ui/question/QuestionItem';
import {
  LevelEnum,
  type ITestRequest,
  type ITestResponse,
  type ITestSubmit,
} from '@/ui/testGenerated/test.types';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react';
import { Controller, useFieldArray, useForm, useFormState } from 'react-hook-form';

interface ITestRequerements {
  subject: string;
  level: number;
  count: number;
  [key: `question-${number}`]: number; // Add dynamic question names
}
export interface ITestGenerated {
  test_id: string;
  level: LevelEnum;
  subject: string;
  count: number;
  test_data: IQuestionItemNoAnswer[];
}
export interface ISubmitedAnswers {
  test_id: string;
  selected_answers: number[];
  user_id?: string;
}
export interface ITestResults {
  correct: number;
  incorrect: number;
  score: number;
}

type Props = {
  user_id?: string;
};

export const MultiStepForm = () => {
  const { userId } = useUserContext();
  console.log('user', userId);
  if (!userId) {
    <div className="m-4">
      <p>Please login to see your progress...</p>
      <Link href="/login">Login</Link>
    </div>;
  }
  const { register, handleSubmit, reset, watch, control } = useForm<ITestRequerements>();
  const [testRequirements, setTestRequirements] = useState<ITestRequerements>({
    subject: '',
    level: 0,
    count: 0,
  });
  const [generatedQuestions, setGeneratedQuestions] = useState<ITestGenerated>({
    test_id: '',
    level: LevelEnum.EASY,
    subject: '',
    test_data: [],
    count: 0,
  });
  const [submittedAnswers, setSubmittedAnswers] = useState<ISubmitedAnswers>({
    test_id: '',
    selected_answers: [],
    user_id: '',
  });
  const [testResults, setTestResults] = useState<ITestResults>({
    correct: 0,
    incorrect: 0,
    score: 0,
  });
  const [step, setStep] = useState(1);

  const mutationGenerate = useMutation({
    mutationKey: ['generate'],
    mutationFn: (data: ITestRequest) => testService.generateTest(data),
    onMutate: async data => {
      console.log('loading');
    },
    onSuccess: data => {
      const { test_id, level, subject, test_data, count } = data.data;
      setGeneratedQuestions({ test_id, level, subject, test_data, count });
      setSubmittedAnswers({ test_id, selected_answers: [], user_id: userId || '' });
      setStep(2);
    },
  });

  const mutationSubmit = useMutation({
    mutationKey: ['submit'],
    mutationFn: (data: ITestSubmit) => testService.submit_answers(data),
    onMutate: async data => {
      console.log('loading');
    },
    onSuccess: data => {
      const results = {
        correct: data.data.status.correct,
        incorrect: data.data.status.incorrect,
        score: data.data.status.score,
      };
      setTestResults(results);
      setStep(3);
      console.log('results', results);
    },
  });

  const onSubmitRequirements = (requirementsData: ITestRequerements) => {
    mutationGenerate.mutate(requirementsData);
    console.log('succes', requirementsData);
    reset();
  };
  const onSubmitResults = () => {
    if (!generatedQuestions) return;

    const submissionData: ITestSubmit = {
      test_id: generatedQuestions.test_id,
      selected_answers: generatedQuestions.test_data.map(q => q.selected_answer || 0),
      user_id: userId ? userId : '',
    };
    console.log('submit', submissionData);

    mutationSubmit.mutate(submissionData);
    reset();
    setStep(3);
  };
  const levelLabels: { [key in LevelEnum]: string } = {
    [LevelEnum.EASY]: 'EASY',
    [LevelEnum.MEDIUM]: 'MEDIUM',
    [LevelEnum.INTERMEDIATE]: 'INTERMEDIATE',
    [LevelEnum.DIFFICULT]: 'DIFFICULT',
  };
  const levelLabel = levelLabels[generatedQuestions.level as LevelEnum];

  return (
    <div>
      MultiStepForm
      {step == 1 && (
        <div className="p-2 bg-white rounded-lg space-y-4 max-w-sm mx-auto">
          <form
            onSubmit={handleSubmit(onSubmitRequirements)}
            autoComplete="off"
            className="grid grid-cols-4 gap-1 "
          >
            <div className="col-span-3">
              <input
                type="text"
                className="w-full border border-gray-200 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Subject"
                {...register('subject')}
              />
            </div>
            <div className="col-span-1 row-span-2">
              <Button
                type="submit"
                extraStyles={
                  'w-full h-full rounded-lg bg-blue-500 transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400'
                }
              >
                Generate
              </Button>
            </div>

            <div className="col-span-2">
              <Controller
                name="level"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <SelectLevel
                    id="level"
                    newValue={value || 0}
                    onChange={onChange}
                    props={{}}
                  />
                )}
              />
            </div>
            <div className="col-span-1">
              <input
                type="number"
                {...register('count', {
                  required: 'Count is required',
                  min: { value: 1, message: 'Minimum value is 1' },
                  max: { value: 25, message: 'Maximum value is 25' },
                })}
                className=" border w-full border-gray-200 rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Count"
                {...register('count')}
              />
            </div>
          </form>
        </div>
      )}
      {step == 2 && (
        <div>
          <form
            className="test-generated  max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            onSubmit={handleSubmit(onSubmitResults)}
          >
            <div className="p-6">
              <h3>SUBJECT: {generatedQuestions.subject}</h3>
              <span className="p-1 border rounded-sm">{levelLabel}</span>
            </div>
            <ol>
              {generatedQuestions.test_data.map((q: IQuestionItemNoAnswer, idx: number) => {
                return (
                  <Controller
                    name={`question-${idx}`}
                    control={control}
                    defaultValue={q.selected_answer || 0}
                    render={({ field }) => (
                      <QuestionItemNoAnswer
                        item={q}
                        question_index={idx}
                        handleChange={value => {
                          q.selected_answer = value;
                          field.onChange(value);
                        }}
                        selectedValue={q.selected_answer || 0}
                      />
                    )}
                    key={`${q.id} ${idx}`}
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
        </div>
      )}
      {step === 3 && testResults && (
        <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Test Results</h2>
          <p>Correct: {testResults.correct}</p>
          <p>Incorrect: {testResults.incorrect}</p>
          <p>Score: {testResults.score}%</p>
          <button
            onClick={() => {
              setStep(1);
              setGeneratedQuestions({
                test_id: '',
                level: LevelEnum.EASY,
                subject: '',
                test_data: [],
                count: 0,
              });
              setTestResults({ correct: 0, incorrect: 0, score: 0 });
            }}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};