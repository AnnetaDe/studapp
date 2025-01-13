'use client';
import { useUserContext } from '@/app/UserProvider';

import { useQuery } from '@tanstack/react-query';
import { testService } from '../../../services/test.service';
import Link from 'next/link';
import React from 'react';
import { Summary } from '@/ui/dashboard/Summary';
import { BySubject } from '@/ui/dashboard/BySubject';
import { Polar } from './Polar';
import { backgroundColors, borderColors, wrongAnswers } from './chartData';
import { Loader } from '@/ui/loader/Loader';
import { BySubjectAccordion } from '@/app/(public)/dashboard/BySubjectAccordion';

export const DashBoard: React.FC = () => {
	const { userId } = useUserContext();
	if (!userId) {
		return (
			<div className="m-4">
				<p>Please login to see your progress...</p>
				<Link href="/login">Login</Link>
			</div>
		);
	}

	const { data, error, isLoading } = useQuery({
		queryKey: ['performance', userId],
		queryFn: () => testService.performance(userId),
		enabled: !!userId,
	});

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

	if (isLoading) return <Loader />;
	if (error) return <div>Opps!... {error.message}</div>;

	return (
		<div className="mx-auto max-w-5xl overflow-auto bg-white p-4">
			<h1 className="mb-4 text-xl font-bold">User Performance Dashboard</h1>
			<div className="mb-6">
				<Summary
					total_score={data ? data.data.performance.total_score : 0}
					total_questions={data ? data.data.performance.total_questions : 0}
					total_tests={data ? data.data.performance.total_tests : 0}
				/>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-5">
					<div className="col-span-1">
						<BySubject
							test_data={data ? data.data.performance.tests : []}
							title_subject="Subject"
							title_tests="Tests"
							total_by_subj={data ? data.data.performance.total_by_subj : {}}
						/>
					</div>
					<div className="min-h-[360px] min-w-[360px] rounded-lg bg-white p-4 md:col-span-4">
						<Polar chartdata={chartData} />
					</div>
				</div>

				<div>
					<BySubjectAccordion
						user_id={userId}
						data={data ? data : { data: { performance: { tests: [], total_by_subj: {} } } }}
					/>
				</div>
			</div>
		</div>
	);
};
