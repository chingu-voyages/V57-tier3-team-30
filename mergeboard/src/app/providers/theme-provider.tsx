"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem // Allows choosing the "system" option
      disableTransitionOnChange // Prevents flickering on change
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
