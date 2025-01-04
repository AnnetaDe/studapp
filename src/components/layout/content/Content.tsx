import { Header } from '../header/Header';
import type { PropsWithChildren } from 'react';

export default function Content({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="content col-span-4">
      <Header />
      {children}
    </main>
  );
}
