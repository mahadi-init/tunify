'use client';

import MusicControl from './MusicController';
import '@/css/loader.css';
import useMusic from '@/hooks/useMusic';

export default function Music({
  params,
}: {
  params: { categories: string; id: string };
}) {
  const { musicCover, downloadUrl } = useMusic(params.categories, params.id);

  return (
    <div className='flex w-full flex-col items-center justify-center gap-4 pt-12'>
      <MusicControl musicCover={musicCover} downloadURL={downloadUrl} />
    </div>
  );
}
