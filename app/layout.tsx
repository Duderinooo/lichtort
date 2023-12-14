import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import Head from 'next/head';
import { inter } from './fonts';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'LichtOrt',
  description: 'LichtOrt Meditation Yoga Heilung',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(props: PropsWithChildren<RootLayoutProps>) {
  const { children } = props;
  return (
    <html lang="en">
      <Head>{children}</Head>
      <body>
        <Navbar />
        <div className={`${inter.className} antialiased`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
