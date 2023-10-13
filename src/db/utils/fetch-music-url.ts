import fetchMusicInfoById from '@/db/utils/fetch-music-info-by-id';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/db/lib/client';
import { DB_MUSIC_LOCATION } from '@/const/locations';

const fetchMusicUrl = async (category?: string, name? : string) => {

  const musicRef = ref(
    storage,
    `${DB_MUSIC_LOCATION}/${category}/${name}`,
  );

  return await getDownloadURL(musicRef)
}

export  default  fetchMusicUrl

