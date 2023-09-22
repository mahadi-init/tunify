'use client';

import { Card, Image } from '@nextui-org/react';

export default function App() {
  return (
    <div className='space-y-2 border-none p-2'>
      <Image
        alt='Woman listing to music'
        className='object-cover'
        height={300}
        src='/images/hero-card.png'
        width={300}
      />
      <div className='flex flex-col gap-1 pl-2'>
        <p className='font-bold'>Pram Tumi</p>
        <p className=''>
          by <span className='text-pink-500'>Tahsan</span>
        </p>
      </div>
    </div>
  );
}
