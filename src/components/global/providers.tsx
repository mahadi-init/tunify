"use client";

import { NextUIProvider } from "@nextui-org/react";
import AppNavbar from "../native/Navbar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <main className="p-4 dark text-foreground bg-background">
        <AppNavbar />
        {children}
      </main>
    </NextUIProvider>
  );
}
