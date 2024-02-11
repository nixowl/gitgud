import { cookies } from "next/headers"
import { GithubAuth } from "@/components/landing/github-auth"
import TempSession from "@/components/landing/temp-session"

export default function Home() {
  const cookie = cookies()
  const authToken = cookie.get("auth-token")?.value

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <main className="mt-72 h-[3000px]">
          <h2 className="-z-50 text-6xl font-medium">We are still building 🧑🏻‍🏭</h2>
        </main>
        {authToken && <TempSession authToken={authToken} />}
      </div>
    </>
  )
}
