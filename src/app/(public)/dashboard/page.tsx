import type { Metadata } from 'next';
import { DashBoard } from './DashBoard';

export const metadata: Metadata = {
  title: '',
};

export default function Page() {
  return (
    <div>
      <DashBoard />
    </div>
  );
}
