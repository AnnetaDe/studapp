import './globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Providers } from './Providers';
import { UserProvider } from './UserProvider';


config.autoAddCss = false;

const noto = Noto_Sans({
  variable: '--font-noto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'studapp',
  description: 'smart is new sexy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${noto.variable} ${noto.variable} antialiased `}>
          <UserProvider>
            {children}
          </UserProvider>
        </body>
      </Providers>
    </html >
  );
}
