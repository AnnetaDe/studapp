'use client';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
interface Props {
	user_id?: string;
	data: {
		data: {
			performance: {
				total_by_subj: {
					[key: string]: number;
				};

				tests: {
					test_id: string;
					test_subject: string;
					correct_answers: number;
					incorrect_answers: number;
					num_test_questions: number;
					test_score: number;
				}[];
			};
		};
	};
}

export const BySubjectAccordion = ({ data }: Props) => {
	const router = useRouter();
	const grouped = React.useMemo(() => {
		return data.data.performance.tests.reduce(
			(acc, obj) => {
				const key = obj.test_subject;
				if (!acc[key]) acc[key] = [];
				acc[key].push(obj);
				return acc;
			},
			{} as { [key: string]: typeof data.data.performance.tests }
		);
	}, [data]);
	const navigateToTest = (testId: string) => {
		if (router) {
			router.push(`/dashboard/${testId}`);
		}
	};

	return (
		<div>
			<ul>
				{grouped &&
					Object.entries(grouped).map(([subject, group]) => (
						<li key={subject}>
							<h2 className="text-bold text-2xl">{subject}</h2>
							<ol>
								{group.map((test, index) => (
									<li
										className="bg cursor-pointer bg-slate-300 p-2"
										key={index}
										onClick={() => navigateToTest(test.test_id)}
									>
										<p>Test ID: {test.test_id}</p>
										<p>Correct Answers: {test.correct_answers}</p>
										<p>Incorrect Answers: {test.num_test_questions - test.correct_answers}</p>
										<p>Num: {test.num_test_questions}</p>
									</li>
								))}
							</ol>
						</li>
					))}
			</ul>
		</div>
	);
};
