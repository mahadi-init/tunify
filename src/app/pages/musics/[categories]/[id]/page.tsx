'use client';

import Image from 'next/image';
import MusicControl from './MusicController';
import { ref } from '@firebase/storage';
import { storage } from '@/db/lib/client';
import { DB_COVER_IMAGES_LOCATION, DB_MUSIC_LOCATION } from '@/const/locations';
import { useEffect, useState } from 'react';
import MusicDb from '@/db/utils/db-music';
import { getDownloadURL } from 'firebase/storage';

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
      <Image
        src={musicCover ?? '/gif/loading.gif'}
        width={500}
        height={500}
        className='rounded-full object-cover'
        alt='music cover'
      />
      <MusicControl downloadURL={downloadUrl} />
    </div>
  );
}
