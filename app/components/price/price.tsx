import Image from 'next/image';

type PriceProps = {
  image: string;
  price: string;
  length: string;
};

export const Price = (props: PriceProps) => {
  const { image, price, length } = props;
  return (
    <div className="relative flex justify-between overflow-hidden rounded bg-primary-400 p-1 px-4 font-bold text-white">
      <Image
        src={image}
        alt={
          'Vibrant colorful background in yellow or red to highlight the text written on it'
        }
        fill
        objectFit="cover"
      />
      <p className="relative">Länge: {length}</p>
      <p className="relative">Preis: {price}</p>
    </div>
  );
};
