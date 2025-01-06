import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'login' | 'register';
  extraProp?: string;
  extraStyles?: string;
}

export function Button({ children, variant, extraProp, extraStyles }: Props) {
  return (
    <button className={`button button--${variant} ${extraStyles}`} extra-prop={extraProp}>
      {children}
    </button>
  );
}
