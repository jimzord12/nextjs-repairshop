"use client";

import { ThemeProvider as NextThemesProvder } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvder {...props}>{children}</NextThemesProvder>;
}
