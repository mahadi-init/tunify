import { collection, getDocs } from 'firebase/firestore';
import MusicCard from './MusicCard';
import { db } from '@/db/lib/client';

async function fetchAllMusics(collectName: string) {
  const querySnapshot = await getDocs(collection(db, collectName));

  let data: any = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });

  return data;
}

export default async function Music() {
  const musics = await fetchAllMusics('musics');
  console.log(musics);

  return (
    <div className='grid grid-cols-2 gap-1.5 pt-12 md:grid-cols-3 md:gap-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-4'>
      {musics.map((music: any) => {
        return <MusicCard key={music.id} id={music.id} data={music.data} />;
      })}
    </div>
  );
}
