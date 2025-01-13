import { OneDynamicTest } from './OneDynamicTest';


export interface IPageProps<T> {
	params: Promise<T>;
}
export type TPageIdProp = IPageProps<{ testId: string }>;

export default async function Page({ params }: TPageIdProp) {
	const testId = (await params).testId;
	return (
		<div>
			<OneDynamicTest testId={testId} />
			<div className="bg-red-800">paf</div>
		</div>
	);
}
