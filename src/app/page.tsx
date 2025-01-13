import type { Metadata } from 'next';
import PublicLayout from './(public)/layout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
	title: '',
};

export default function Page() {
	const children = (
		<div className="flex flex-col justify-center">
			<Link
				href="/login"
				className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
			>
				<span className="mr-2"> Login</span>

				<FontAwesomeIcon icon={faArrowAltCircleRight} />
			</Link>
			<Link
				href="/generate"
				className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
			>
				<span className="mr-2">Generate</span>

				<FontAwesomeIcon icon={faArrowAltCircleRight} />
			</Link>
			<Link
				href="/dashboard"
				className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
			>
				<span className="mr-2">Go to Dashboard</span>
				<FontAwesomeIcon icon={faArrowAltCircleRight} />
			</Link>
		</div>
	);

	return <PublicLayout children={children} />;
}
