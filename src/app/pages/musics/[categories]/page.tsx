import MusicDb from '@/db/utils/db-music';
import MusicCard from './MusicCard';

export default async function Music() {
  const musicDb = new MusicDb();
  const musics = await musicDb.fetchAllMusics();
  console.log(musics);

  return (
    <div className='grid grid-cols-2 gap-1.5 pt-12 md:grid-cols-3 md:gap-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-4'>
      {musics.map((music: any) => {
        return <MusicCard key={music.id} id={music.id} data={music.data} />;
      })}
    </div>
  );
}
