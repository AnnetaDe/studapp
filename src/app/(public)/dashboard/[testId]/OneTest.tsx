'use client';

import { testService } from '@/services/test.service';
import { SkeletonLoader } from '@/ui/skeletonLoader/SkeletonLoader';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React from 'react';

type OneTestProp = {
	params: {
		testId: string;
	};
};
export async function OneTest({ params }: OneTestProp): Promise<React.ReactElement> {
	const testId = (await params).testId;
	// const { testId } = await params;
	console.log('searchParams', params);

	const { data, isLoading, isError } = useQuery({
		queryKey: ['oneTest', testId],
		queryFn: () => testService.getTestById(testId as string),
		enabled: !!testId,
	});

	console.log('data', data);
	if (isError) {
		return <div>error</div>;
	}

	return (
		<div>
			{isLoading ? <SkeletonLoader count={1} /> : <div>Test ID: {testId}</div>}
			{/* {data && <div>{data.data.test_data.map((item: any) => <div key={item.id}>{item.question}</div>)}</div>} */}
		</div>
	);
}
