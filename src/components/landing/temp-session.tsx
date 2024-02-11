"use client"

import { useSession } from "@/hooks/query/useSession"

type TempSessionProps = {
  authToken: string
}
export default function TempSession({ authToken }: TempSessionProps) {
  const { user } = useSession(authToken)
  return (
    <div className="bg-gradient-to-tr from-green-800 via-red-800 to-cyan-800 bg-clip-text text-transparent">
      Welcome, how are u ? alles gut ? {user?.name}, have a nice day
    </div>
  )
}
