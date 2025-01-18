import { userService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';

export function useMe() {
	const { data, isLoading, error, isSuccess, refetch } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.profile(),
	});
	console.log('data', data);
	return {
		data,
		isLoading,
		isSuccess,
		refetch,
	};
}
