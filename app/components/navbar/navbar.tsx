'use client';
import {
  CalendarIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { Hero } from '../hero/hero';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-[-90vh] h-screen w-screen">
      <Hero />+
      <div className="absolute bottom-0 w-screen p-4 text-center text-white">
        <div className="flex justify-center gap-4">
          <Link
            key={'Startseite'}
            href={'/'}
            className={clsx(
              'flex gap-2 p-3 text-2xl font-medium hover:text-primary-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-primary-400': pathname === '/',
              },
            )}
          >
            <HomeIcon className="w-6" />
            <p className="m-auto">Startseite</p>
          </Link>
          <Image
            className="ml-[-18px]"
            src={'./images/logo_clear.svg'}
            alt={''}
            height={64}
            width={64}
            unoptimized
          />
          <Link
            key={'Termine'}
            href={'/termine'}
            className={clsx(
              'flex gap-2 p-3 text-2xl font-medium hover:text-primary-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-primary-400': pathname === '/termine',
              },
            )}
          >
            <CalendarIcon className="w-6" />
            <p className="m-auto">Termine</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
