import Image from 'next/image';

type DownloadSectionProps = {
  image: string;
  price: number;
  length: number;
};

export const DownloadSection = (props: DownloadSectionProps) => {
  const { image, price, length } = props;
  return (
    <div className="relative flex justify-between overflow-hidden rounded bg-primary-400 p-1 px-4 font-bold text-white">
      <Image src={image} alt={''} fill objectFit="cover" />
      <div>
        <div>
          <Image src={'/images/green_bg.jpg'} alt={''} />
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
