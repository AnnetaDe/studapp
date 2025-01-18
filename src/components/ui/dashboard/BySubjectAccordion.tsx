'use client';

import React, { useMemo } from 'react';
import { OneTest } from './OneTest';
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

export const BySubjectAccordion: React.FC<Props> = ({ data }) => {
	const grouped = useMemo(() => {
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

	return (
		<div>
			<h2 className="text-md font-semibold">Tests</h2>
			<ul>
				{grouped &&
					Object.entries(grouped).map(([subject, group]) => (
						<li key={subject}>
							<h2 className="text-bold text-md">{subject}</h2>
							<ol className="flex flex-wrap gap-2">
								{group.map((test, index) => (
									<li key={index}>
										<OneTest test={test} />
									</li>
								))}
							</ol>
						</li>
					))}
			</ul>
		</div>
	);
};
