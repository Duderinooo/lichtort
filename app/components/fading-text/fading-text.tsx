import { rosaviro } from '@/app/fonts';
import { wrap } from 'module';
import { useState, useEffect } from 'react';

export const FadingText = () => {
  const data = [
    {
      id: 1,
      text: 'Friede beginnt damit, daß jeder von uns sich jeden Tag um seinen Körper und seinen Geist kümmert.',
      author: 'Thich Nhat Hanh',
    },
    {
      id: 2,
      text: 'Lerne zu schweigen und du merkst, dass Du zu viel geredet hast.',
      author: 'Tschen Tschiju',
    },
    {
      id: 3,
      text: 'Das einzig lebenswerte Abenteuer kann für den modernen Menschen nur noch innen zu finden sein.',
      author: 'Carl Gustav Jung',
    },
    {
      id: 4,
      text: 'Verbringe jeden Tag einige Zeit mit Dir selbst.',
      author: 'Dalai Lama',
    },
  ];

  const [index, setIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
        setIsFadingOut(false);
      }, 1000); // Adjust the duration to match your transition duration
    }, 7000);

    return () => clearInterval(interval);
  }, [index, data.length]);

  return (
    <div
      className={`px-4 sm:px-10 lg:px-24 xl:px-56 ${
        rosaviro.className
      } text-center antialiased transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ textWrap: 'balance' }}
    >
      <div className="text-2xl font-bold">{data[index].text}</div>
      <div className=" mt-4 text-xl">{data[index].author}</div>
    </div>
  );
};
