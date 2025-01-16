import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import type { Metadata } from 'next';
import Link from 'next/link';
import { authService } from '../../../services/auth.service';

export const metadata: Metadata = {
	title: '',
};

export default function Page() {
	const { data, error, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => authService.profile(),
	});
	console.log(data);

	return (
		<div className="flex flex-col justify-center">
			oops nothing here ...
			<Link
				className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
				href="/generate"
			>
				<span className="mr-2">Take a test</span>
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
}
