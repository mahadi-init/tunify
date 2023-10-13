import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/db/lib/client';
import { DB_MUSIC_LOCATION } from '@/const/locations';

const musicInfoById = async (
  musicId: string,
  collectionName: string = DB_MUSIC_LOCATION,
) => {
  const snap = await getDoc(doc(db, collectionName, musicId));

  if (snap.exists()) {
    return snap.data();
  } else {
    return null;
  }
};

export default musicInfoById;
