import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/navbar/navbar';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

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
      <Navbar />
      <div className={`${inter.className} antialiased`}>{children}</div>
    </html>
  );
}
