'use client';

import { authService } from '@/services/auth.service';
import { useQuery } from '@tanstack/react-query';

export const Profile = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => authService.profile(),
	});
	console.log(data);
	return <div>profile</div>;
};
