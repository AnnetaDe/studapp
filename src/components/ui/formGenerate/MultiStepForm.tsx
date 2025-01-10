'use client';
import { useUserContext } from '@/app/UserProvider';
import { testService } from '@/services/test.service';
import { Button } from '@/ui/Button/Button';
import SelectLevel from '@/ui/formGenerate/SelectLevel';
import type { IQuestionItemNoAnswer as OriginalIQuestionItemNoAnswer } from '@/ui/question/question.types';

interface IQuestionItemNoAnswer extends OriginalIQuestionItemNoAnswer {
  id: string;
  selected_answer?: number;
}

import QuestionItemNoAnswer from '@/ui/question/QuestionItem';
import { LevelEnum, type ITestRequest, type ITestSubmit } from '@/ui/testGenerated/test.types';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useState } from 'react';
import { Controller, useFieldArray, useForm, useFormState } from 'react-hook-form';

interface ITestRequerements {
  subject: string;
  level: LevelEnum;
  count: number;
}
interface ITestGenerated {
  test_id: string;
  level: LevelEnum;
  subject: string;
  count: number;
  test_data: IQuestionItemNoAnswer[];
}
interface ISubmitedAnswers {
  test_id: string;
  selected_answers: number[];
  user_id?: string;
}
interface ITestResults {
  correct: number;
  incorrect: number;
  score: number;
}
interface IOption {
  value: 1 | 2 | 3 | 4;
  label: string;
}

type FormValues = {
  step1: ITestRequerements;
  step2: ITestGenerated;
  step3: ISubmitedAnswers;
};
type Props = {
  user_id?: string;
};
export const MultiStepForm = () => {
  const { userId } = useUserContext();
  console.log('user', userId);

  const { register, handleSubmit, reset, watch, control } = useForm<FormValues>();
  const [testRequirements, setTestRequirements] = useState<ITestRequerements>({
    subject: '',
    level: 1,
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

  const onChangeRequirements = (testRequirements: ITestRequerements) => {
    setTestRequirements(testRequirements);
  };
  const mutationGenerate = useMutation({
    mutationKey: ['generate'],
    mutationFn: (testRequirements: ITestRequerements) => testService.generateTest(testRequirements),
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

  const onSubmitRequirements = (requirementsData: FormValues['step1']) => {
    mutationGenerate.mutate(requirementsData);
    console.log('succes', requirementsData);
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
    <div className="px-2 py-8">
      MultiStepForm
      {step == 1 && (
        <div className=" bg-white rounded-lg max-w-sm mx-auto space-y-2">
          <form
            onSubmit={handleSubmit(data => onSubmitRequirements(data.step1))}
            autoComplete="off"
            className="grid grid-cols-4 gap-1 "
          >
            <div className="col-span-3">
              <label
                htmlFor="subject"
                className="text-floating "
              ></label>
              <input
                id="subject"
                type="text"
                className="w-full border border-gray-200 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Subject"
                {...register('step1.subject', { required: 'Subject is required' })}
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
                name="step1.level"
                control={control}
                defaultValue={LevelEnum.EASY}
                render={({ field: { onChange, value } }) => (
                  <SelectLevel
                    {...{ onChange, value }}
                    id="select-level"
                    newValue={value || 1}
                    onChange={onChange}
                    props={{}}
                  />
                )}
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="count"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <input
                id="count"
                type="number"
                {...register('step1.count', {
                  required: 'Count is required',
                  min: { value: 1, message: 'Minimum value is 1' },
                  max: { value: 25, message: 'Maximum value is 25' },
                })}
                className=" border w-full border-gray-200 rounded-sm p-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Count"
                {...register('step1.count')}
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
                    name={`step2.test_data.${idx}` as const}
                    control={control}
                    defaultValue={q}
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
