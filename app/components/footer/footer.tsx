import Image from 'next/image';

export const Footer = () => {
  return (
    <div className="flex min-h-[300px] w-screen flex-col items-center justify-center justify-between gap-8 bg-gradient-to-r from-tertiary-400 to-primary-400 px-4 py-8 text-center text-white sm:px-10 sm:text-left md:flex md:flex-row md:p-14 lg:px-28 lg:py-24 xl:px-60 ">
      <div className="flex flex-col gap-4 md:flex-row md:gap-24">
        <div>
          <p className="mb-2 text-3xl">Kontakt</p>
          <p>Adresse: Möhrenweg 2</p>
          <p>Telefon: 0120120120120</p>
          <p>Email: dsadasas@webebwebw.de</p>
        </div>
        <div>
          <p className="mb-2 text-3xl">Rechtliches</p>
          <p>Adresse</p>
          <p>Telefon</p>
          <p>Email</p>
        </div>
      </div>
      <Image src={'/images/logo_clear.svg'} alt={'Lichtort company logo: Yoga, Meditation, Heilung'} height={128} width={128} />
    </div>
  );
};
