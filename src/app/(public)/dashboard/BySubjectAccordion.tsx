'use client';
import { STUDENT_PAGE_config } from '@/config/public.config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
			<ul>
				{grouped &&
					Object.entries(grouped).map(([subject, group]) => (
						<li key={subject}>
							<h2 className="text-bold text-2xl">{subject}</h2>
							<ol>
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
