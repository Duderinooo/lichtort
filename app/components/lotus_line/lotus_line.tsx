import React from 'react';
import Image from 'next/image';

export const LotusLine = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <div className="h-px w-96 bg-gray-300"></div>
        <Image
          src="./images/lotus.jpg"
          height={50}
          width={50}
          alt="lotus icon"
          className="mx-5"
        />
        <div className="h-px w-96 bg-gray-300"></div>
      </div>
    </div>
  );
};
