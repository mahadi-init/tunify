import { DB_COVER_IMAGES_LOCATION, DB_MUSIC_LOCATION } from '@/const/locations';
import { storage } from '@/db/lib/client';
import MusicDb from '@/db/utils/db-music';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';

export default function useMusicSource(category: string, musicId: string) {
  const [musicCover, setMusicCover] = useState<string>();
  const [downloadUrl, setDownloadUrl] = useState<string>();

  useEffect(() => {
    const fetchMusicData = async () => {
      const musicDb = new MusicDb();
      const data = await musicDb.fetchMusicById(musicId);

      const imageRef = ref(
        storage,
        `${DB_COVER_IMAGES_LOCATION}/${data?.cover}`,
      );

      const musicRef = ref(
        storage,
        `${DB_MUSIC_LOCATION}/${category}/${data?.name}`,
      );

      setMusicCover(await getDownloadURL(imageRef));
      setDownloadUrl(await getDownloadURL(musicRef));
    };

    fetchMusicData();
  }, [category, musicId]);

  return {
    musicCover,
    downloadUrl,
  };
}
