import LayoutU from '@/components/layout/LayoutU';
import type { PropsWithChildren } from 'react';

export default function PublicLayout({ children }: PropsWithChildren<unknown>) {
  return <LayoutU>{children}</LayoutU>;
}
