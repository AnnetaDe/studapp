import { Header } from '../header/Header';
import type { PropsWithChildren } from 'react';

export default function Content({ children }: PropsWithChildren<unknown>) {
  return (
    <main>
      <Header />
      <section>{children}</section>
    </main>
  );
}
