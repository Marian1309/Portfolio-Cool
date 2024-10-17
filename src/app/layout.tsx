import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import Header from '@/components/header';
import { PageTransition, StairTransition } from '@/components/transitions';

import './globals.scss';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: 'Marian Pidchashyi | Software Developer',
  description: "Marian's Pidchashyi CV"
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.variable}>
        <Header />

        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
};

export default RootLayout;
