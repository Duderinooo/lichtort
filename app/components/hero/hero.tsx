import Image from 'next/image';
import { FadingText } from '../fading-text/fading-text';

export const Hero = () => {
  return (
    <div>
      <div className="absolute top-[50vh] z-10 w-screen text-center text-white">
        <FadingText />
      </div>
      <Image
        src={'./images/hero.jpg'}
        alt={
          'An orange and red sunset with a silhouette of a tree in the foreground and a vibrant yellow sun in the middle'
        }
        fill
        unoptimized
      />
    </div>
  );
};
