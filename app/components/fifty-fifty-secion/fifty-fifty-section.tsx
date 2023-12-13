import Image from 'next/image';

type FiftyFiftySectionProps = {
  image: string;
  left?: boolean;
  text: JSX.Element;
};

export const FiftyFiftySection = (props: FiftyFiftySectionProps) => {
  const { image, left, text } = props;

  const flexDirectionClass = left ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`block md:flex ${flexDirectionClass} relative gap-4 `}>
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-md lg:w-1/2">
        <Image src={image} alt={''} fill objectFit="cover" unoptimized />
      </div>
      <div className="w-full pt-4 md:p-0 lg:w-1/2">{text}</div>
    </div>
  );
};
