"use client"

import { useSession } from "@/hooks/query/useSession"

export default function Home() {
  const { user, isLoading, error } = useSession()
  if (user) console.log(user.name)
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-gradient-to-br from-pink-400 from-20% via-cyan-400 via-50% to-purple-800 to-70%">
        <h2 className="text-6xl font-medium">We are still building 🧑🏻‍🏭</h2>

        <a
          href="http://152.53.12.218/v1/auth/github"
          className="rounded-md bg-primary px-4 py-3 font-medium text-primary-foreground transition-all duration-500 hover:animate-bounce"
        >
          Log in with GitHub
        </a>

        <a href="/dashboard/profile" className="mt-2 font-medium underline">
          {" "}
          Go to the Dashboard{" "}
        </a>
      </div>
    </>
  )
}
