import MusicCard from '@/components/shared/MusicCard';

export default function Music() {
  return (
    <div className='grid grid-cols-2 gap-1.5 pt-12 md:grid-cols-3 md:gap-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-4'>
      <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard />
    </div>
  );
}
