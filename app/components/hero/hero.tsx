import Image from 'next/image';

export const Hero = () => {
  return (
    <div>
      <div className="absolute top-[50vh] z-10 w-screen text-center text-white">
        <p className="text-2xl" style={{ fontFamily: 'cursive' }}>
          Friede beginnt damit, daß jeder von uns sich jeden Tag um seinen
          Körper und seinen Geist kümmert.
        </p>
        <p className="mt-4 text-xl" style={{ fontFamily: 'cursive' }}>
          Thich Nhat Hanh
        </p>
      </div>
      <Image src={'./images/hero.jpg'} alt={''} fill unoptimized />
    </div>
  );
};
