import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../lib/client';
import { DB_MUSIC_LOCATION } from '@/const/locations';

export default class MusicDb {
  collectionName: string = DB_MUSIC_LOCATION;

  fetchAllMusics = async () => {
    const querySnapshot = await getDocs(collection(db, this.collectionName));

    let data: any = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, data: doc.data() });
    });

    return data;
  };

  fetchMusicById = async (musicId: string) => {
    const snap = await getDoc(doc(db, this.collectionName, musicId));

    if (snap.exists()) {
      return snap.data();
    } else {
      return null;
    }
  };
}
