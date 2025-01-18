'use client';
import { userService } from '@/services/user.service';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export const Me = () => {
	const { data, isLoading, error, isSuccess, refetch } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.profile(),
	});
	const user = data?.user;
	if (data == null || user == null || error) {
		return (
			<div className="flex flex-col items-center justify-center">
				<span className="mr-2 text-xs"> You have to be authorized to scroll your profile</span>
				<Link
					href="/login"
					className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
				>
					<span className="mr-2"> Login</span>

					<FontAwesomeIcon icon={faArrowAltCircleRight} />
				</Link>
			</div>
		);
	}

	return (
		<>
			{isSuccess && user && (
				<div>
					Hello,me
					<div className="flex flex-col items-center justify-center">
						<span className="text-lg">Welcome {user.name || ''}</span>
						<span className="text-lg">Email: {user.email}</span>
						<span className="text-lg">Role: {user.role || ''}</span>
					</div>
					<div className="flex flex-col justify-center">
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
				</div>
			)}
		</>
	);
};
