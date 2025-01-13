import Link from 'next/link';
import { OneDynamicTest } from './OneDynamicTest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLink } from '@fortawesome/free-solid-svg-icons';

export interface IPageProps<T> {
	params: Promise<T>;
}
export type TPageIdProp = IPageProps<{ testId: string }>;

export default async function Page({ params }: TPageIdProp) {
	const testId = (await params).testId;
	return (
		<div>
			<OneDynamicTest testId={testId} />
			<Link
				className="inline-block cursor-pointer p-2 text-center text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
				href={`/generate`}
			>
				<FontAwesomeIcon icon={faAngleRight} />
				<span className="ml-1"> Take another test</span>
			</Link>
		</div>
	);
}
