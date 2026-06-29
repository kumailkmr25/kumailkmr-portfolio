"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { ColorProvider } from "./ColorProvider";

export function ThemeProvider({ children }: { children: ReactNode }) {
 return (
 <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
 <ColorProvider>
 {children}
 </ColorProvider>
 </NextThemesProvider>
 );
}
