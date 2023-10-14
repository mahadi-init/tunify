import { useContext, useEffect, useState } from 'react';
import musicUrl from '@/db/utils/music-url';
import { MusicContext } from '@/contexts/music-context';

export default function useMusicPlayer() {
  const [audio] = useState(new Audio());
  const { musicInfo, isMusicPlaying, setIsMusicPlaying } =
    useContext(MusicContext);

  useEffect(() => {
    setIsMusicPlaying(false);
    const getMusic = async () => {
      return await musicUrl(musicInfo?.data.category, musicInfo?.data.name);
    };

    getMusic().then((url) => {
      audio.src = url;
    });
  }, [
    audio,
    musicInfo?.data.category,
    musicInfo?.data.name,
    setIsMusicPlaying,
  ]);

  const handleMusic = async () => {
    if (isMusicPlaying) {
      audio.pause();
      setIsMusicPlaying(false);
    } else {
      audio.play();
      setIsMusicPlaying(true);
    }
  };
  return { handleMusic, musicInfo, isMusicPlaying };
}
