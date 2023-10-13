import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '@/db/lib/client';
import { DB_COVER_IMAGES_LOCATION } from '@/const/locations';

const musicCover = async (
  cover: string,
  imgLocation: string = DB_COVER_IMAGES_LOCATION,
) => {
  const imageRef = ref(storage, `${imgLocation}/${cover}`);

  return await getDownloadURL(imageRef);
};

export default musicCover;
