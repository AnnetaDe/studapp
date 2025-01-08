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

interface AuthProps {
  isLogin: boolean;
}

export default function Auth({ isLogin }: AuthProps) {
  const { register, handleSubmit, reset } = useForm<IAuthFormData>();
  const router = useRouter();
  const { setUser } = useUserContext();

  const mutationLogin = useMutation({
    mutationFn: (data: IAuthFormData) => authService.login(data),
    onSuccess: data => {
      router.push('/');
      setUser(data);
      reset();
    },
  });

  const mutationRegister = useMutation({
    mutationFn: (data: IAuthFormData) => authService.register(data),
    onSuccess: data => {
      router.push('/');
      setUser(data);
      reset();
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
      className="w-full max-w-sm mx-auto shadow-md rounded px-8 pt-6 pb-8 bg-gray-700 flex flex-col mt-10"
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
        extraStyles="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-4"
        label="e-mail"
        type="email"
        placeholder="Your email: "
        {...register('username', { required: true })}
      />
      <Field
        extraStyles="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-4"
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
            'mb-4, rounded bg-blue-500 transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400'
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
            'mb-4 rounded bg-blue-500 transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400'
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
