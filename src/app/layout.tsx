import './globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { Providers } from './Providers';

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
      <body className={`${noto.variable} ${noto.variable} antialiased`}>
        Providers Layout
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
