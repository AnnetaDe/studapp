'use client';

import { useQuery } from '@tanstack/react-query';

import React from 'react';
import { Summary } from '@/ui/dashboard/Summary';
import { BySubject } from '@/ui/dashboard/BySubject';
import { Polar } from '../../../components/ui/dashboard/Polar';
import {
	backgroundColors,
	borderColors,
	wrongAnswers,
} from '../../../components/ui/dashboard/chartData';
import { Loader } from '@/ui/loader/Loader';
import { BySubjectAccordion } from '@/ui/dashboard/BySubjectAccordion';
import toast from 'react-hot-toast';
import { userService } from '@/services/user.service';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export const DashBoard: React.FC = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['performance'],
		queryFn: () => userService.performance(),
	});

	if (data == null)
		return (
			<div className="flex flex-col items-center justify-center">
				<span className="mr-2 text-xs"> You have to be authorized to scroll your dashboard</span>
				<Link
					href="/login"
					className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
				>
					<span className="mr-2"> Login</span>

					<FontAwesomeIcon icon={faArrowAltCircleRight} />
				</Link>
			</div>
		);
	if (
		(data && data.data && data.data.performance === null) ||
		data.data.performance.tests.length === 0
	)
		return (
			<div className="flex flex-col items-center justify-center">
				<span className="mr-2 text-xs">You have to take at least one test</span>
				<Link
					href="/generate"
					className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
				>
					<span className="mr-2">Take a test</span>
					<FontAwesomeIcon icon={faArrowAltCircleRight} />
				</Link>
			</div>
		);

	const groupedData = data?.data.performance.tests.reduce((acc: any, test: any) => {
		const topic = test.test_subject;
		if (!acc[topic]) {
			acc[topic] = {
				totalQuestions: 0,
				incorrectAnswers: 0,
			};
		}
		acc[topic].totalQuestions += test.num_test_questions;
		acc[topic].incorrectAnswers += test.num_test_questions - test.correct_answers;
		return acc;
	}, {});

	const chartData = data
		? {
				labels: Object.keys(groupedData),

				datasets: [
					{
						label: 'Total Questions',
						data: Object.values(groupedData).map((topic: any) => topic.totalQuestions),
						backgroundColor: Object.keys(groupedData).map(
							(_, index) => backgroundColors[index % backgroundColors.length]
						),
						borderColor: Object.keys(groupedData).map(
							(_, index) => borderColors[index % borderColors.length]
						),

						borderWidth: 2,
					},
					{
						label: 'Incorrect Answers',
						data: Object.values(groupedData).map((topic: any) => topic.incorrectAnswers),
						backgroundColor: Object.keys(groupedData).map(
							(_, index) => wrongAnswers[index % wrongAnswers.length]
						),
						borderColor: Object.keys(groupedData).map(
							(_, index) => borderColors[index % borderColors.length]
						),

						borderWidth: 1,
					},
				],
			}
		: { label: 'Performance', datasets: [] };

	if (isLoading)
		return (
			<div className="flex items-center justify-center">
				<Loader />
			</div>
		);
	if (error) return toast.error('An error occurred while fetching data');

	return (
		<div className="mx-auto max-w-6xl overflow-auto bg-white p-4">
			<h1 className="mb-4 text-xl font-bold">User Performance Dashboard</h1>
			<div className="mb-6">
				<Summary
					total_score={data ? data.data.performance.total_score : 0}
					total_questions={data ? data.data.performance.total_questions : 0}
					total_tests={data ? data.data.performance.total_tests : 0}
				/>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-7 md:gap-2">
					<div className="col-span-1 md:col-span-2">
						<BySubject
							test_data={data ? data.data.performance.tests : []}
							title_subject="Subject"
							title_tests="Tests"
							total_by_subj={data ? data.data.performance.total_by_subj : {}}
						/>
					</div>
					<div className="aspect-square min-h-[320px] min-w-[320px] rounded-lg bg-white md:col-span-4">
						<Polar chartdata={chartData} />
					</div>
				</div>

				<div>
					<BySubjectAccordion
						data={data ? data : { data: { performance: { tests: [], total_by_subj: {} } } }}
					/>
				</div>
			</div>
		</div>
	);
};
