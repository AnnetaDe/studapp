'use client';
import { useUserContext } from '@/app/UserProvider';
import { testService } from '@/services/test.service';
import { SkeletonLoader } from '@/ui/skeletonLoader/SkeletonLoader';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface OneTestProp {
	testId: string | undefined;
}
export function OneDynamicTest(testId: OneTestProp) {
	const { userId } = useUserContext();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['oneTest', testId],
		queryFn: () => testService.getTestById(testId?.testId as string),
		enabled: !!testId,
	});
	console.log('data', data?.data.history);

	if (isLoading) return <SkeletonLoader count={1} />;

	if (isError) {
		return <div>error</div>;
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
			{/* {isLoading ? <SkeletonLoader count={1} /> : <div>Test ID: {testId}</div>} */}
			{data && <div>{data.data.history.subject}</div>}
			{data && <div>{dateOfTest.toDateString()}</div>}
			{data && (
				<div>
					{data.data.history.test_data.map((test: any, inx: number) => (
						<div key={`${test.id}+${inx}`}>
							<h3>Question: {test.question}</h3>
							<div>
								Submitted Answer: <strong>{test.choices?.[test.submitted_answer]}</strong>
							</div>
							<div>
								Correct Answer: <strong>{test.choices?.[test.correct_answer]}</strong>
							</div>
							{test.is_correct ? <div>correct</div> : <div>incorrect</div>}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
