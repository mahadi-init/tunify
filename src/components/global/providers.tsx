'use client';

import { NextUIProvider } from '@nextui-org/react';
import AppNavbar from '../native/Navbar';
import { MusicContext } from '@/contexts/music-context';
import useMusicPlayer from '@/hooks/useMusicPlayer';
import { ReactNode, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [currentMusic, setCurrentMusic ] = useState<string | null | undefined>(null)
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <NextUIProvider>
      <MusicContext.Provider value={{ currentMusic, setCurrentMusic,isPlaying, setIsPlaying }}>
        <main className='bg-background p-4 text-foreground dark'>
          <AppNavbar />
          {children}
        </main>
      </MusicContext.Provider>
    </NextUIProvider>
  );
}
