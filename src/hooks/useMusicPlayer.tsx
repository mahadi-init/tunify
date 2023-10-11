import { useContext, useEffect, useState } from 'react';
import { MusicContext } from '@/contexts/music-context';

export default function useMusicPlayer(downloadUrl : string | null | undefined) {
  //@ts-expect-error
  const [audio, setAudio] = useState<Audio>();
  const { currentMusic, setCurrentMusic,isPlaying, setIsPlaying } = useContext(MusicContext);

  useEffect(() => {
    setAudio(new Audio());
  }, []);

  const handleMusic = async () => {
    if (!currentMusic) {
      audio.src = downloadUrl;
      audio.volume = 0.75;
      setCurrentMusic(downloadUrl)
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return { audio, handleMusic,isPlaying };
}