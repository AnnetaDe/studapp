import type { PropsWithChildren } from 'react';

export default async function Layout({ children }: PropsWithChildren<unknown>) {
  return <div className="layout-login-register">{children}</div>;
}
