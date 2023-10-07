import './globals.css';
import { Providers } from '@/components/global/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tunify',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
