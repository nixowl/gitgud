"use client"

import Image from "next/image"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useSession } from "@/hooks/query/useSession"

type UserProfileProps = {
  authToken?: string
}
export function UserProfile({ authToken }: UserProfileProps) {
  const { user } = useSession(authToken!)
  return (
    <section className="flex w-full flex-col items-start justify-start gap-4 p-4 lg:px-8">
      <h3 className="pb-2 text-2xl font-medium">My Profile</h3>
      <div className="flex w-full flex-col items-start justify-between gap-2 rounded-md border border-border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-center gap-6">
          <Image
            height={64}
            width={64}
            src={"/default-user.jpeg"}
            alt="avatar"
            className="size-16 rounded-full object-cover lg:size-32"
          />
          <div>
            <h3 className="lg:text-xl lg:font-medium">Name: {user?.name}</h3>
            <h3 className="lg:text-xl lg:font-medium">Email: {user?.email}</h3>
          </div>
        </div>

        <Button variant="secondary" size="sm" className="self-end px-5">
          Edit
          <Icons.Pen className="ml-3 size-4" />
        </Button>
      </div>
    </section>
  )
}
