'use client';

import Image from 'next/image';
import { MusicInfo } from '@/types/music-info';
import { FcMusic } from 'react-icons/fc';
import { Button } from '@nextui-org/react';
import { MusicContext } from '@/contexts/music-context';
import { useContext } from 'react';

export default function MusicCard(props: MusicInfo) {
  const { musicInfo, setMusicInfo } = useContext(MusicContext);

  const component = () => {
    if (musicInfo && musicInfo.id === props.id) {
      return (
        <div className='relative bottom-12'>
          {musicInfo && musicInfo.id === props.id && (
            <Button
              isIconOnly
              variant={'solid'}
              className='relative bottom-4 left-60 rounded-full'
            >
              <FcMusic size={54} />
            </Button>
          )}
          <div className='flex flex-col gap-1 pl-2'>
            <p className='font-bold'>{props.data.name}</p>
            <p className=''>
              by <span className='text-pink-500'>{props.data.author}</span>
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className='flex flex-col gap-1 pl-2'>
          <p className='font-bold'>{props.data.name}</p>
          <p>
            by <span className='text-pink-500'>{props.data.author}</span>
          </p>
        </div>
      );
    }
  };

  return (
    <div
      className='cursor-pointer space-y-2 border-none p-2'
      onClick={() => setMusicInfo(props)}
    >
      <div>
        <Image
          alt='Woman listing to music'
          className='h-96 rounded-md object-cover'
          height={300}
          src={props.cover}
          width={300}
        />
      </div>
      {component()}
    </div>
  );
}
