'use client';

import { DB_MUSIC_LOCATION } from '@/const/locations';
import Image from 'next/image';
import Link from 'next/link';

interface MusicCardProps {
  id: string;
  data: {
    name: string;
    image: string;
    author: string;
    category: string;
  };
}

export default function MusicCard(props: MusicCardProps) {
  return (
    <Link
      href={`/pages/${DB_MUSIC_LOCATION}/${props.data.category}/${props.id}`}
      className='space-y-2 border-none p-2'
    >
      <Image
        alt='Woman listing to music'
        className='rounded-md object-cover'
        height={300}
        src='/images/hero-card.png'
        width={300}
      />
      <div className='flex flex-col gap-1 pl-2'>
        <p className='font-bold'>{props.data.name}</p>
        <p className=''>
          by <span className='text-pink-500'>{props.data.author}</span>
        </p>
      </div>
    </Link>
  );
}
