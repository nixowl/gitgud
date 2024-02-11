"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

// rounded-md bg-primary px-4 py-3 font-medium text-primary-foreground transition-all duration-500 hover:animate-bounce

export function GithubAuth() {
  const router = useRouter()
  const searchParams = useSearchParams()
 
  useEffect(() => {
    if (searchParams.get("token")) {
      document.cookie = `auth-token=${searchParams.get("token")}; path=/`
    }

    void router.push("/")
  })

  return (
    <a
      href="http://152.53.12.218/v1/auth/github"
      className="before z-2 relative block w-max rounded-lg bg-clip-padding px-4 py-2 text-base font-medium leading-5 text-inherit no-underline backdrop-blur-md backdrop-filter before:absolute"
    >
      Log in with GitHub
      <div
        className="z-1 absolute left-0 top-0
       h-full w-full
       rounded-lg border-[1px] border-purple-500/40 bg-gradient-to-b from-purple-600/10 from-10% via-transparent via-70% to-purple-600/10 backdrop-blur-md hover:border-violet-400/50 hover:from-purple-500/20 hover:via-transparent
        hover:to-purple-500/20"
      ></div>
    </a>
  )
}
