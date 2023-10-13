import TrackCard from '@/components/shared/TrackCard';
import musicCategoryCounts from '@/db/utils/music-category-count';

export default async function Home() {
  const data = await musicCategoryCounts();

  return (
    <div className='pt-12'>
      <p className='font-bold'>Popular Tracks</p>
      <div className='grid grid-cols-2 gap-1.5 pt-4 md:grid-cols-3 md:gap-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-4'>
        {Object.entries(data).map(([trackName, tracks]) => (
          <div key={trackName}>
            <TrackCard trackName={trackName} tracks={tracks} />
          </div>
        ))}
      </div>
    </div>
  );
}
