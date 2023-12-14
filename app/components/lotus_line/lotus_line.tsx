import React from 'react';
import Image from 'next/image';

export const LotusLine = () => {
  return (
    <div className="flex flex-row items-center justify-center p-8 sm:p-10 md:p-14 lg:p-24">
      <div className="h-[1px] w-96 rounded bg-primary-400 md:h-[2px]" />
      <Image
        src="/images/lotus.svg"
        height={50}
        width={50}
        alt="lotus icon"
        className="mx-5"
      />
      <div className="h-[1px] w-96 rounded bg-primary-400 md:h-[2px]" />
    </div>
  );
};
