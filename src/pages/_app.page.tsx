import "@/styles/globals.css"

import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"
import { TailwindIndicator } from "@/components/helpers/tailwind-indicator"


const inter = Inter({ subsets: ["latin"] })


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return <>
    <style jsx global>{`
    html {
      font-family: ${inter.style.fontFamily};
    }
  `}</style>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
      
        <Component {...pageProps} />
        <Toaster richColors />
        <TailwindIndicator />
      </QueryClientProvider>
    </ThemeProvider>
  </>
}