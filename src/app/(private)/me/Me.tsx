'use client';
import Auth from '@/app/(auth)/Auth';
import { userService } from '@/services/user.service';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export const Me = () => {
	const { data, isLoading, error, isSuccess, refetch } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.profile(),
	});

	if (isLoading) return <div>Loading profile</div>;
	if (error) return <div>Oops try again</div>;

	if (data == null || data.user == null || error) {
		return (
			<div className="flex flex-col items-center justify-center">
				<span className="mr-2 text-xs"> You have to be authorized to see your profile</span>
				<Link
					href="/login"
					className="inline-block cursor-pointer p-2 text-lg transition duration-200 hover:border-[#c98d9e] hover:text-[#c98d9e]"
				>
					<span className="mr-2"> Login</span>

					<FontAwesomeIcon icon={faArrowAltCircleRight} />
				</Link>
				{/* <Auth
					isLogin={true}
					path={'/me'}
					onLogin={() => refetch()}
				/> */}
			</div>
		);
	}

	const name = data.user.name;
	const email = data.user.email;
	const role = data.user.role;

	console.log('data', data.user);
	return (
		<div>
			Hello,me
			<div className="flex flex-col items-center justify-center">
				<span className="text-lg">Welcome {name}</span>
				<span className="text-lg">Email: {email}</span>
				<span className="text-lg">Role: {role}</span>
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
	);
};
