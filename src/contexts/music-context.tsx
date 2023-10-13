import { createContext, Dispatch, SetStateAction } from 'react';
import { MusicInfo } from '@/types/music-info';

interface iContext {
  musicInfo: MusicInfo | undefined;
  setMusicInfo: Dispatch<SetStateAction<MusicInfo | undefined>>;
  isMusicPlaying: boolean;
  setIsMusicPlaying: Dispatch<SetStateAction<boolean>>;
}

export const MusicContext = createContext<iContext>({
  musicInfo: undefined,
  setMusicInfo: () => {},
  isMusicPlaying: false,
  setIsMusicPlaying: () => {},
});
