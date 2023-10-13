import MusicCard from './MusicCard';
import fetchAllMusicInfos from '@/db/utils/fetch-all-music-infos';
import fetchMusicCover from '@/db/utils/fetch-music-cover';
import { MusicInfo } from '@/types/music-info';

export default async function Music() {
  const musics = await fetchAllMusicInfos();
  console.log(musics);

  return (
    <div className='grid grid-cols-1 gap-1.5 pt-12 md:grid-cols-3 md:gap-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-4'>
      {musics.map(async (music: any) => {
        const cover = await fetchMusicCover(music.data.cover)
        return <MusicCard key={music.id} id={music.id} cover={cover} data={music.data} />;
      })}
    </div>
  );
}
