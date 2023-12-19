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
    <div className="sticky top-0 z-10 grid h-[9vh] w-screen place-content-center sm:top-[-41vh] sm:block sm:h-[50vh] md:top-[-89vh] md:h-screen">
      <Hero />
      <div className="relative bottom-0 my-auto w-screen py-[6px] text-center text-white sm:absolute sm:p-4">
        <div className="flex justify-around gap-4 sm:justify-center sm:gap-10 md:gap-4">
          <Link
            key={'Startseite'}
            href={'/#start'}
            className={clsx(
              'flex gap-2 p-3 text-xl font-medium hover:text-primary-400 md:flex-none md:justify-start md:p-2 md:px-3 lg:text-2xl',
              {
                'text-primary-400': pathname === '/',
              },
            )}
          >
            <HomeIcon className="w-6 md:w-8 " />
            <p className="m-auto hidden md:block">Startseite</p>
          </Link>
          <Link
            key={'Termine'}
            href={'/termine'}
            className={clsx(
              'flex gap-2 p-3 text-xl font-medium hover:text-primary-400 md:flex-none md:justify-start md:p-2 md:px-3 lg:text-2xl',
              {
                'text-primary-400': pathname === '/termine',
              },
            )}
          >
            <CalendarIcon className="w-6 md:w-8 " />
            <p className="m-auto hidden md:block">Termine</p>
          </Link>
          <Image
            className="mx-4 my-auto hidden h-10 w-10 sm:block md:h-16 md:w-16"
            src={'/images/logo_clear.svg'}
            alt={'LichtOrt company logo: Yoga, Meditation, Healing'}
            height={64}
            width={64}
            unoptimized
          />
          <Link
            key={'Angebot'}
            href={'/angebot#start'}
            className={clsx(
              'flex gap-2 p-3 text-xl font-medium hover:text-primary-400 md:flex-none md:justify-start md:p-2 md:px-3 lg:text-2xl',
              {
                'text-primary-400': pathname === '/angebot',
              },
            )}
          >
            <BookOpenIcon className="w-6 md:w-8 " />
            <p className="m-auto hidden md:block">Angebot</p>
          </Link>
          <Link
            key={'Mediathek'}
            href={'/media'}
            className={clsx(
              'flex gap-2 p-3 text-xl font-medium hover:text-primary-400 md:flex-none md:justify-start md:p-2 md:px-3 lg:text-2xl',
              {
                'text-primary-400': pathname === '/media',
              },
            )}
          >
            <PhotoIcon className="w-6 md:w-8 " />
            <p className="m-auto hidden md:block">Mediathek</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
