'use client';
import { Card, Skeleton, Button } from '@nextui-org/react';

import { useUserContext } from '@/app/UserProvider';
import { testService } from '@/services/test.service';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { OneDynamicQuestion } from './OneDynamicQuestion';

interface OneTestProp {
	testId: string | undefined;
}
export const OneDynamicTest = (testId: OneTestProp) => {
	const { userId } = useUserContext();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['oneTest', testId],
		queryFn: () => testService.getTestById(testId?.testId as string),
		enabled: !!testId,
	});

	if (isLoading) return <div> Loading ..</div>;

	if (isError) {
		return <div>toast.error("smth went wrong")</div>;
	}
	// if (!userId) {
	// 	return (
	// 		<div className="m-4">
	// 			<p>Please login to see your tests...</p>
	// 		</div>
	// 	);
	// }
	const dateOfTest = new Date(data?.data.history.timestamp);
	return (
		<div>
			{data && <div>{data.data.history.subject}</div>}
			{data && <div>{dateOfTest.toDateString()}</div>}
			{data && (
				<ul className="max-w-2xl divide-y divide-slate-300 overflow-hidden rounded-lg bg-white px-1">
					{data.data.history.test_data.map((test: any, idx: number) => (
						<li
							className="flex items-center gap-4 bg-white p-4 transition duration-200 hover:bg-slate-100"
							key={`${test.id}+${idx}`}
						>
							<div></div>
							<OneDynamicQuestion
								test={test}
								idx={idx}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
