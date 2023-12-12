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

const links = [
  { name: 'Startseite', href: '/', icon: HomeIcon },
  {
    name: 'Termine',
    href: '/termine',
    icon: CalendarIcon,
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="relative h-screen w-screen">
      <Hero />
      <div className="to-primary-400 absolute bottom-0  w-screen bg-gradient-to-r from-white p-4 text-center">
        <div className="flex justify-center gap-4">
          <Image
            src={'./images/logo_clear.svg'}
            alt={''}
            height={64}
            width={64}
            unoptimized
          />
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex gap-2 rounded-md bg-gray-50 p-3 text-2xl font-medium hover:bg-sky-100 hover:text-red-400 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-sky-100 text-orange-400': pathname === link.href,
                  },
                )}
              >
                <LinkIcon className="w-6" />
                <p className="m-auto">{link.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
