'use client';

import { NextUIProvider } from '@nextui-org/react';
import AppNavbar from '../native/Navbar';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <main className='bg-background p-4 text-foreground dark'>
        <AppNavbar />
        {children}
      </main>
    </NextUIProvider>
  );
}
