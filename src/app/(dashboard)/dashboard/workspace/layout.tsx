import { type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { Button, buttonVariants } from "@/components/ui/button"

export default function WorkspaceLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full flex-1">
      <section className="flex h-14 w-full items-center justify-between px-4">
        <article className="flex h-full items-center justify-center gap-2">
          <Image
            src="/default-user.jpeg"
            alt="bla bla"
            className="mr-2 size-8 rounded-md object-cover object-center shadow-xl"
          />

          <Link href="/dashboard/workspace/workspace" className="text-xl font-medium hover:underline">
            Name
          </Link>
        </article>

        <article className="flex items-center justify-center gap-2">
          <a
            href="/dashboard/workspace/workspace?.slug}"
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Icons.Home className="size-5" />
          </a>
          <Link
            href={"/dashboard/workspace/workspace"}
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            <Icons.Users className="size-5" />
          </Link>
          <Button variant="ghost" size="icon">
            <Icons.Settings className="size-5" />
          </Button>
        </article>
      </section>

      {children}
    </main>
  )
}
