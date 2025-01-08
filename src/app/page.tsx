import type { Metadata } from 'next';
import PublicLayout from './(public)/layout';

export const metadata: Metadata = {
  title: '',
};

export default function Page() {
  const children = <div>HOME child</div>;

  return (
    <div>
      <PublicLayout children={children} />
    </div>
  );
}
