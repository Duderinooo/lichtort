import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import Head from 'next/head';
import { inter } from './fonts';

export const metadata: Metadata = {
  title: 'Lichtort',
  description: 'Lichtort Meditation Yoga Heilung',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head children={undefined} />
      <body>
        <Navbar />
        <div className={`${inter.className} antialiased`}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
