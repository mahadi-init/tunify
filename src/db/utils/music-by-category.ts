import { DB_MUSIC_LOCATION } from '@/const/locations';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/client';

const musicByCategory = async (
  category: string,
  collectionName: string = DB_MUSIC_LOCATION,
) => {
  const q = query(
    collection(db, collectionName),
    where('category', '==', category),
  );

  let data: any = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, data: doc.data() });
  });

  return data;
};

export default musicByCategory;
