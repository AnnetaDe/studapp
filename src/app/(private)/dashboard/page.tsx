import type { Metadata } from 'next';
import { DashBoard } from './DashBoard';

export const metadata: Metadata = {
  title: '',
};

export default async function Page() {
	return <DashBoard />;
}
