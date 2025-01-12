import { DynamicOneTest } from './DynamicOneTest';

export default async function Page(test_id: string) {
	const id = test_id;
	return (
		<div>
			<DynamicOneTest test_id={id} />
		</div>
	);
}
