import MusicCard from './MusicCard';
import musicByCategory from '@/db/utils/music-by-category';
import musicCover from '@/db/utils/music-cover';

export default async function Music({
  params,
}: {
  params: { category: string };
}) {
  const musics = await musicByCategory(params.category);

  return (
    <div className='grid grid-cols-1 gap-1.5 pt-12 md:grid-cols-3 md:gap-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-4'>
      {musics.map(async (music: any) => {
        const cover = await musicCover(music.data.cover);
        return (
          <MusicCard
            key={music.id}
            id={music.id}
            cover={cover}
            data={music.data}
          />
        );
      })}
    </div>
  );
}
