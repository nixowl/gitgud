import { cookies } from "next/headers"

import { UserProfile } from "./user-profile"

export default function ProfilePage() {
  const cookie = cookies()
  const authToken = cookie.get("auth-token")?.value

  return (
    <main className="w-full flex-col justify-start py-4 lg:py-8">
      <h2 className="w-full px-4 text-2xl font-semibold lg:px-8">Account Settings</h2>
      <UserProfile authToken={authToken} />
    </main>
  )
}
