import { OneDynamicTest } from './OneDynamicTest';

export default async function Page({ params }: { params: { testId: string } }) {
	const testId = (await params).testId;

	return (
		<div>
			<OneDynamicTest testId={testId} />
		</div>
	);
}
