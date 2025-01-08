import type { Metadata } from 'next';
import AuthForm from '../Auth';

export const metadata: Metadata = {
  title: '',
};

export default function Page() {
  return <AuthForm isLogin />;
}
