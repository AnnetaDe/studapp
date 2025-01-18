'use client';
import { authService } from '@/services/auth.service';
import type { IAuthFormData } from '@/services/auth.service';
import { Button } from '@/ui/Button/Button';
import { Field } from '@/ui/field/Field';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useUserContext } from '../UserProvider';
import toast from 'react-hot-toast';

interface AuthProps {
	isLogin: boolean;
	onLogin?: () => void;
	path?: string;
}

export default function Auth({ isLogin }: AuthProps) {
	const { register, handleSubmit, reset } = useForm<IAuthFormData>();
	const router = useRouter();

	const mutationLogin = useMutation({
		mutationFn: (data: IAuthFormData) => authService.login(data),
		onSuccess: data => {
			router.push('/dashboard');

			// if (data && data.data && data.data.user) {
			// 	setUserId(data.data.user._id);
			// 	setUserBoard(data.data.user.performance);
			// }
			// reset();
		},
		onError(error) {
			toast.error('Login failed check your credentials');
		},
	});

	const mutationRegister = useMutation({
		mutationFn: (data: IAuthFormData) => authService.register(data),
		onSuccess: data => {
			router.push('/login');
			reset();
		},
		onError(error) {
			toast.error('Registration failed check your credentials');
		},
	});

	const onSubmit = (data: IAuthFormData) => {
		if (isLogin) {
			mutationLogin.mutate(data);
		} else {
			mutationRegister.mutate(data);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="mx-auto mt-10 flex w-full max-w-sm flex-col rounded bg-slate-700 px-8 pb-8 pt-6 shadow-md"
		>
			{!isLogin && (
				<Field
					extraStyles="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-4"
					label="Name"
					type="text"
					placeholder="Your name: "
					{...register('name', { required: true })}
				/>
			)}
			<Field
				extraStyles="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-pink-500 mb-4"
				label="e-mail"
				type="email"
				placeholder="Your email: "
				{...register('username', { required: true })}
			/>
			<Field
				extraStyles="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-pink-500 mb-4"
				label="password"
				type="password"
				placeholder="Enter password: "
				{...register('password', { required: true })}
			/>
			{isLogin && (
				<Button
					type="submit"
					variant={'login'}
					extraStyles={
						'mb-4  text-white rounded bg-witch transform rounded-sm py-2 font-bold duration-300 hover:bg-pink-400'
					}
				>
					Login
				</Button>
			)}
			{!isLogin && (
				<Button
					type="submit"
					variant={'register'}
					extraStyles={
						'mb-4 text-white rounded bg-witch transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-pink-400'
					}
				>
					Register
				</Button>
			)}
			{isLogin ? (
				<Link
					href={'/register'}
					className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
				>
					Dont have account? Register{' '}
				</Link>
			) : (
				<Link
					href={'/login'}
					className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
				>
					Already have account? Login
				</Link>
			)}
		</form>
	);
}
