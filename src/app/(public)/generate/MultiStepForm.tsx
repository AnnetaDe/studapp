'use client';
import { useUserContext } from '@/app/UserProvider';
import { testService } from '@/services/test.service';
import { Button } from '@/ui/Button/Button';
import { Select, SelectItem } from '@nextui-org/select';
import { Input } from '@nextui-org/input';
import type { IQuestionItemNoAnswer as OriginalIQuestionItemNoAnswer } from '@/ui/question/question.types';

interface IQuestionItemNoAnswer extends OriginalIQuestionItemNoAnswer {
	id: string;
	selected_answer?: number;
}

import QuestionItemNoAnswer from '@/ui/question/QuestionItem';
import { LevelEnum, type ITestSubmit } from '@/ui/testGenerated/test.types';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { DisplayResults } from '../../../components/ui/displayResults/DisplayResults';

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

export const MultiStepForm = () => {
	const { userId } = useUserContext();

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
			console.log('submit', data);
			const results = {
				correct: data.data.status.correct,
				incorrect: data.data.status.incorrect,
				score: data.data.status.score,
			};
			setTestResults(results);
			setStep(3);
		},
	});
	const onSubmitRequirements = (requirementsData: FormValues['step1']) => {
		mutationGenerate.mutate(requirementsData);
	};
	const onSubmitResults = () => {
		if (!generatedQuestions) return;

		const submissionData: ITestSubmit = {
			test_id: generatedQuestions.test_id,
			selected_answers: generatedQuestions.test_data.map(q => q.selected_answer || 0),
			user_id: userId ? userId : '',
		};

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
	const resetTest = () => {
		setStep(1);
		setGeneratedQuestions({
			test_id: '',
			level: LevelEnum.EASY,
			subject: '',
			test_data: [],
			count: 0,
		});
		setTestResults({ correct: 0, incorrect: 0, score: 0 });
	};

	return (
		<div className="mx-auto max-w-4xl px-2 py-8">
			MultiStepForm
			{step == 1 && (
				<div className="mx-auto max-w-lg items-end space-y-2 rounded-lg bg-slate-200 p-4">
					<form
						onSubmit={handleSubmit(data => onSubmitRequirements(data.step1))}
						autoComplete="off"
						className="grid grid-cols-4 gap-1"
					>
						<div className="col-span-3">
							<label
								htmlFor="subject"
								className="text-floating"
							></label>
							<Input
								id="subject"
								type="text"
								placeholder="Subject"
								{...register('step1.subject', { required: 'Subject is required' })}
							/>
						</div>
						<div className="col-span-1 row-span-2">
							<Button
								type="submit"
								extraStyles={
									'w-full h-full rounded-md border border-slate-300 py-2 px-2 text-center text-xs transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
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
									<Select
										label="Level"
										className="h-full w-full"
									>
										{Object.entries(levelLabels).map(([value, label]) => (
											<SelectItem
												key={value}
												value={value}
												{...register('step1.level')}
											>
												{label}
											</SelectItem>
										))}
									</Select>
								)}
							/>
						</div>
						<div className="col-span-1 row-span-1">
							<Controller
								name="step1.count"
								control={control}
								defaultValue={1}
								render={({ field: { onChange, value } }) => (
									<Input
										id="count"
										type="number"
										placeholder="1"
										className="h-full w-full"
										startContent={
											<div className="pointer-events-none mx-3 flex items-center"> </div>
										}
										{...register('step1.count')}
									/>
								)}
							/>
						</div>
					</form>
				</div>
			)}
			{step == 2 && (
				<div>
					<form
						className="test-generated mx-auto max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
						onSubmit={handleSubmit(onSubmitResults)}
					>
						<div className="p-6">
							<h3>SUBJECT: {generatedQuestions.subject}</h3>
							<span className="rounded-sm border p-1">{levelLabel}</span>
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
								className="h-full max-w-sm rounded-md border border-slate-300 px-4 py-2 text-center text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white hover:shadow-lg focus:border-slate-800 focus:bg-slate-800 focus:text-white active:border-slate-800 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			)}
			{step === 3 && testResults && (
				<DisplayResults
					results={testResults}
					resetTest={resetTest}
				/>
			)}
		</div>
	);
};
