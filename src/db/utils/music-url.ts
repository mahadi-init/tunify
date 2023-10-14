import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/db/lib/client';
import { DB_MUSIC_LOCATION } from '@/const/locations';

const musicUrl = async (category?: string, name?: string) => {
  const musicRef = ref(storage, `${DB_MUSIC_LOCATION}/${category}/${name}`);

  return await getDownloadURL(musicRef);
};

export default musicUrl;
