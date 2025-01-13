import Link from 'next/link';
import { OneDynamicTest } from './OneDynamicTest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faLink } from '@fortawesome/free-solid-svg-icons';

export interface IPageProps<T> {
	params: Promise<T>;
}
export type TPageIdProp = IPageProps<{ testId: string }>;

export default async function Page({ params }: TPageIdProp) {
	const testId = (await params).testId;
	return (
		<div>
			<OneDynamicTest testId={testId} />

			<div className="mt-8 flex-col">
				<Link
					className="block cursor-pointer p-2 text-center text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
					href={`/dashboard`}
				>
					<FontAwesomeIcon icon={faAngleLeft} />
					<span className="ml-1"> Return to dashboard</span>
				</Link>
			</div>
		</div>
	);
}
