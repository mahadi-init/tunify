import { createContext, Dispatch, SetStateAction } from 'react';

interface iContext {
  currentMusic: string | null | undefined,
  setCurrentMusic: Dispatch<SetStateAction<string | null | undefined>>,
  isPlaying : boolean,
  setIsPlaying : Dispatch<SetStateAction<boolean>>
}

export const MusicContext = createContext<iContext>({
  currentMusic : null,
  setCurrentMusic : ()=>{},
  isPlaying: false,
  setIsPlaying : ()=>{}
});