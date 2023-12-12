import Image from 'next/image';

export const Hero = () => {
  return (
    <div>
      <Image src={'./images/hero.jpg'} alt={''} fill unoptimized />
    </div>
  );
};
