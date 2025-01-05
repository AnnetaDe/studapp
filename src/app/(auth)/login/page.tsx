import type { Metadata } from 'next';
import AuthForm from '../AuthForm';

// import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: '',
  // ...NO_INDEX_PAGE
};

export default function Page() {
  return <AuthForm />;
}
