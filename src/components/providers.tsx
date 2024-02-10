"use client"

import * as React from "react"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function Providers({ children, ...props }: ThemeProviderProps) {
  const queryClient = new QueryClient()
  return (
    <NextThemesProvider {...props}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextThemesProvider>
  )
}
