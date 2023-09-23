'use client';

import Image from 'next/image';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/db/lib/client';
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

interface MusicCardProps {
  id: string;
  data: {
    name: string;
    image: string;
    author: string;
    song: string;
    category: string;
  };
}

export default function MusicCard(props: MusicCardProps) {
  //@ts-expect-error
  const [audio, setAudio] = useState<Audio>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio());
  }, []);

  const handleMusic = async () => {
    // check if already intialized
    if (!audio.src) {
      const musicRef = ref(storage, `musics/${props.data.song}`);
      audio.src = await getDownloadURL(musicRef);
      audio.volume = 0.75;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className='space-y-2 border-none p-2'>
      <Image
        alt='Woman listing to music'
        className='rounded-md object-cover'
        height={300}
        src='/images/hero-card.png'
        width={300}
      />
      <div className='relative bottom-12'>
        <button
          className='relative bottom-5 start-56'
          aria-label='Play'
          onClick={handleMusic}
        >
          {isPlaying ? (
            <BsPauseCircleFill size={48} />
          ) : (
            <BsPlayCircleFill size={48} />
          )}
        </button>
        <div className='flex flex-col gap-1 pl-2'>
          <p className='font-bold'>{props.data.name}</p>
          <p className=''>
            by <span className='text-pink-500'>{props.data.author}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
