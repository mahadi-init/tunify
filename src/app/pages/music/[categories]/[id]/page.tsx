'use client';

import Image from 'next/image';
import MusicControl from './MusicControl';

export default function Music({ params }: { params: { id: string } }) {
  const { id: musicId } = params;

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 pt-12'>
      <Image
        src='/images/hero-card.png'
        width={500}
        height={500}
        className='rounded-full object-cover'
        alt='music cover'
      />
      <MusicControl />
    </div>
  );
}
