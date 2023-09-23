import TrackCard from '@/components/shared/TrackCard';

export default function Home() {
  return (
    <div className='pt-12'>
      <p className='font-bold'>Popular Tracks😍</p>
      <div className='grid grid-cols-2 gap-1.5 pt-4  md:grid-cols-3 md:gap-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-4'>
        <TrackCard />
      </div>
    </div>
  );
}
