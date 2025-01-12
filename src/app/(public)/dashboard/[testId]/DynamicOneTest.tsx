'use client';

import dynamic from 'next/dynamic';

import { SkeletonLoader } from '@/ui/skeletonLoader/SkeletonLoader';
interface DynamicModelTestProps {
	test_id: string;
}
const DynamicModelTest = dynamic<{ test_id: string }>(
	() =>
		import('./OneTest').then(mod => {
			console.log('mod', mod);
			return mod.OneTest as unknown as React.ComponentType<{ test_id: string }>;
		}),
	{ loading: () => <SkeletonLoader count={1} /> }
);

export function DynamicOneTest({ test_id }: DynamicModelTestProps) {
	if (!test_id || typeof test_id !== 'string') {
		console.error('Invalid test_id:', test_id);
		return null;
	}
	return <DynamicModelTest test_id={test_id} />;
}
