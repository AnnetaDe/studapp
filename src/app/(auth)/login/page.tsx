import type { Metadata } from 'next';
import AuthForm from '../AuthForm';

export const metadata: Metadata = {
  title: '',
};

export default function Page() {
  return <AuthForm isLogin />;
}
