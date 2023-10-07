'use client';

import Image from 'next/image';
import MusicControl from './MusicController';
import { ref } from '@firebase/storage';
import { storage } from '@/db/lib/client';
import { DB_COVER_IMAGES_LOCATION, DB_MUSIC_LOCATION } from '@/const/locations';
import { useEffect, useState } from 'react';
import MusicDb from '@/db/utils/db-music';
import { getDownloadURL } from 'firebase/storage';
import '../../../../../css/loader.css'

export default function Music({
  params,
}: {
  params: { categories: string; id: string };
}) {
  const [musicCover, setMusicCover] = useState<string>();
  const [downloadUrl, setDownloadUrl] = useState<string>();

  useEffect(() => {
    const fetchMusicData = async () => {
      const musicDb = new MusicDb();
      const data = await musicDb.fetchMusicById(params.id);

      const imageRef = ref(
        storage,
        `${DB_COVER_IMAGES_LOCATION}/${data?.cover}`,
      );

      const musicRef = ref(
        storage,
        `${DB_MUSIC_LOCATION}/${params.categories}/${data?.name}`,
      );

      setMusicCover(await getDownloadURL(imageRef));
      setDownloadUrl(await getDownloadURL(musicRef));
    };

    fetchMusicData();
  }, [params.categories, params.id]);

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 pt-12'>

      {
        musicCover ? <div className='flex w-full flex-col items-center justify-center gap-4 pt-12'>
          <Image
            src={musicCover ?? '/gif/loading.gif'}
            width={500}
            height={500}
            className='rounded-full object-cover'
            alt='music cover'
          />
          <MusicControl downloadURL={downloadUrl} />
        </div> : <svg className="loading-animation" preserveAspectRatio="xMidYMid meet" viewBox="0 0 187.3 93.7" height="300px" width="400px">
          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" id="outline" stroke="#4E4FEB"></path>
          <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" stroke="#4E4FEB" fill="none" opacity="0.05" id="outline-bg"></path>
        </svg>
      }
      {/* <Image
        src={musicCover ?? '/gif/loading.gif'}
        width={500}
        height={500}
        className='rounded-full object-cover'
        alt='music cover'
      /> */}
    </div>
  );
}
