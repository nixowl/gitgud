import {GithubAuth} from "@/components/landing/github-auth"

export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-gradient-to-br from-pink-400 from-20% via-cyan-400 via-50% to-purple-800 to-70%">
        <h2 className="text-6xl font-medium">We are still building 🧑🏻‍🏭</h2>

        <GithubAuth />

        <a href="/dashboard/profile" className="mt-2 font-medium underline">
          {" "}
          Go to the Dashboard{" "}
        </a>
      </div>
    </>
  )
}
