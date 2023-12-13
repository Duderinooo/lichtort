'use client';
import {
  CalendarIcon,
  HomeIcon,
  BookOpenIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import { Hero } from '../hero/hero';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-[-90vh] z-10 h-screen w-screen">
      <Hero />
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
          <Image
            className="ml-[-18px]"
            src={'/images/logo_clear.svg'}
            alt={'LichtOrt company logo: Yoga, Meditation, Healing'}
            height={64}
            width={64}
            unoptimized
          />
          <Link
            key={'Angebot'}
            href={'/angebot'}
            className={clsx(
              'flex gap-2 p-3 text-2xl font-medium hover:text-primary-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-primary-400': pathname === '/angebot',
              },
            )}
          >
            <BookOpenIcon className="w-6" />
            <p className="m-auto">Angebot</p>
          </Link>
          <Link
            key={'Mediathek'}
            href={'/media'}
            className={clsx(
              'flex gap-2 p-3 text-2xl font-medium hover:text-primary-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-primary-400': pathname === '/media',
              },
            )}
          >
            <PhotoIcon className="w-6" />
            <p className="m-auto">Mediathek</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
