'use client';

import React from 'react';

import { Card, CardHeader, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

export default function TrackCard({
  trackName,
  tracks,
}: {
  trackName: string;
  tracks: number;
}) {
  return (
    <Link href={`/pages/musics/${trackName}`}>
      <Card className='py-4'>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>
            {trackName.toLocaleUpperCase()}
          </h4>
          <small className='font-medium text-pink-500'>{tracks} Tracks</small>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <Image
            alt='Card background'
            className='rounded-xl object-cover'
            src='/images/hero-card-complete.jpeg'
            width={270}
            height={0}
          />
        </CardBody>
      </Card>
    </Link>
  );
}
