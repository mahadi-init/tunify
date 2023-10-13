import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/db/lib/client';
import { DB_MUSIC_LOCATION } from '@/const/locations';

const musicCategoryCounts = async (
  collectionName: string = DB_MUSIC_LOCATION,
) => {
  const querySnapshot = await getDocs(collection(db, collectionName));

  let categories: string[] = [];

  querySnapshot.forEach((doc) => {
    categories.push(doc.data().category);
  });

  const categoryCounts: Record<string, number> = {};

  for (const category of categories) {
    if (categoryCounts[category]) {
      categoryCounts[category]++;
    } else {
      categoryCounts[category] = 1;
    }
  }

  return categoryCounts;
};

export default musicCategoryCounts;
