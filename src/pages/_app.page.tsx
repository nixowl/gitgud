import "@/styles/globals.css"

import type { AppProps } from "next/app"
import { Nunito } from "next/font/google"
import { useRouter } from "next/router"
import { TailwindIndicator } from "@/components/helpers/tailwind-indicator"
import { Header } from "@/components/landing/header"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"

const nunito = Nunito({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  const router = useRouter()
  console.log(router.pathname)

  const publicPathnames = ["/"]

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          {publicPathnames.includes(router.pathname) && <Header />}
          <Component {...pageProps} />
          <Toaster richColors />
          <TailwindIndicator />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
