import React from 'react';
import Image from 'next/image';

export const LotusLine = () => {
  return (
    <div className="flex flex-row items-center justify-center p-8 sm:p-10 md:p-14 lg:p-24">
      <div className="h-px w-96 bg-primary-400" />
      <Image
        src="/images/lotus.jpg"
        height={50}
        width={50}
        alt="lotus icon"
        className="mx-5"
      />
      <div className="h-px w-96 bg-primary-400" />
    </div>
  );
};
