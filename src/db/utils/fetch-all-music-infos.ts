import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/db/lib/client';
import { DB_MUSIC_LOCATION } from '@/const/locations';

const fetchAllMusicInfos = async (collectionName: string = DB_MUSIC_LOCATION) => {
  const querySnapshot = await getDocs(collection(db, collectionName));

  let data: any = [];

  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });

  console.log(data);
  return data;
};

export default fetchAllMusicInfos;