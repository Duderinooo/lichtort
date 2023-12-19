import Image from 'next/image';

type FiftyFiftySectionProps = {
  alt: string;
  image: string;
  left?: boolean;
  text: JSX.Element;
};

export const FiftyFiftySection = (props: FiftyFiftySectionProps) => {
  const { alt, image, left, text } = props;

  const flexDirectionClass = left ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`block md:flex ${flexDirectionClass} relative gap-4 `}>
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-md lg:w-1/2">
        <Image src={image} alt={alt} fill objectFit="cover" unoptimized />
      </div>
      <div className="grid w-full place-content-center items-center p-2 pt-6 md:p-4 lg:w-1/2">
        {text}
      </div>
    </div>
  );
};
