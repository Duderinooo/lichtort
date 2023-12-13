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
    <div
      className={`flex ${flexDirectionClass} gap-4 p-4`}
      style={{ minHeight: '500px' }}
    >
      <div className="relative w-1/2 overflow-hidden rounded-md">
        <Image src={image} alt={''} fill objectFit="cover" unoptimized />
      </div>
      <div className="w-1/2 p-4">{text}</div>
    </div>
  );
};
