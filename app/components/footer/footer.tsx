import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="min-h-[300px] w-screen bg-gradient-to-r from-tertiary-400 to-primary-400 px-4 py-8 text-white sm:px-10 md:p-14 lg:px-28 lg:py-24 xl:px-60 ">
      <div className="flex flex-col items-center justify-between gap-8 text-center sm:text-left md:flex md:flex-row ">
        <div className="flex flex-col gap-4 md:flex-row md:gap-24">
          <div>
            <p className="mb-2 text-3xl">Kontakt</p>
            <p>Tina Ollmann</p>
            <p>Möhrenweg 2</p>
            <p>22334 Möhrenhausen</p>
            <p>Telefon: 0120120120120</p>
            <p>Email: lichtOrt@gmail.de</p>
          </div>
          <div>
            <p className="mb-2 text-3xl">Rechtliches</p>
            <Link className="block" href={'/datenschutz#datenschutz'}>
              Datenschutz
            </Link>
            <Link className="block" href={'/impressum#impressum'}>
              Impressum
            </Link>
          </div>
        </div>
        <Image
          src={'/images/logo_clear.svg'}
          alt={'LichtOrt company logo: Yoga, Meditation, Healing'}
          height={128}
          width={128}
        />
      </div>
      <div className="mt-10">©2023 LichtOrt</div>
    </div>
  );
};
