"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useSession } from "@/hooks/query/useSession"

export function GithubAuth() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user } = useSession()
  if (user) {
    console.log(user)
  }
  useEffect(() => {
    if (searchParams.get("token")) {
      document.cookie = `auth-token=${searchParams.get("token")}; path=/`
    }

    void router.push("/")
  })

  return (
    <a
      href="http://152.53.12.218/v1/auth/github"
      className="rounded-md bg-primary px-4 py-3 font-medium text-primary-foreground transition-all duration-500 hover:animate-bounce"
    >
      Log in with GitHub
    </a>
  )
}
