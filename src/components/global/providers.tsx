'use client';

import { NextUIProvider } from '@nextui-org/react';
import AppNavbar from '../native/Navbar';
import { MusicContext } from '@/contexts/music-context';
import { ReactNode, useState } from 'react';
import MusicPlayer from '@/components/global/MusicPlayer';
import { MusicInfo } from '@/types/music-info';

export function Providers({ children }: { children: ReactNode }) {
  const [musicInfo, setMusicInfo] = useState<MusicInfo>();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <NextUIProvider>
      <MusicContext.Provider
        value={{ musicInfo, setMusicInfo, isMusicPlaying, setIsMusicPlaying }}
      >
        <main className='bg-background p-4 text-foreground dark'>
          <AppNavbar />
          {children}
          <div className='absolute bottom-0 right-0 p-5'>
            {musicInfo && <MusicPlayer />}
          </div>
        </main>
      </MusicContext.Provider>
    </NextUIProvider>
  );
}
