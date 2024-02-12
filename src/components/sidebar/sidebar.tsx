import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import { sidebarPaths } from "."
import { Icons } from "../icons"
import { Button, buttonVariants } from "../ui/button"
import { ThemeToggle } from "../ui/theme-toggle"
import { WorkspaceDropdown } from "./workspace-dropdown"

type SidebarProps = {
  sidebarWidth: number
}

export function Sidebar({ sidebarWidth }: SidebarProps) {
  const pathname = usePathname()
  console.log("pathname in Sidebar ", pathname)
  return (
    <aside className="hidden w-full flex-col items-center justify-start shadow-sm lg:flex">
      <article className="flex h-14 items-center justify-center">
        <h2
          className={cn(
            "text-xl font-bold",
            sidebarWidth < 140 && "h-8 w-8 rounded-md bg-primary text-center text-white"
          )}
        >
          {sidebarWidth > 140 ? "Dashboard" : "D"}
        </h2>
      </article>
      <WorkspaceDropdown sidebarWidth={sidebarWidth} />
      <section className="flex w-full flex-1 flex-col items-center justify-start gap-2 border-t border-border p-4">
        {sidebarPaths.map(({ Icon, path, title }, index) => (
          <Link
            key={index}
            href={path}
            className={cn(
              buttonVariants({
                size: "sm",
                variant: pathname === path ? "secondary" : "ghost",
              }),
              sidebarWidth > 140 ? "w-full justify-start font-medium" : "h-10 w-10 p-0"
            )}
          >
            <Icon className="size-5" />
            <span className={sidebarWidth > 140 ? "ml-3" : "hidden"}> {title} </span>
          </Link>
        ))}
        <ThemeToggle />
      </section>

      <div className="w-full border-t border-border">
        <section className={cn("flex w-full items-center justify-center py-2", sidebarWidth > 140 ? "px-4" : "px-2")}>
          <div className={sidebarWidth > 140 ? "flex w-full items-center justify-start gap-3" : "size-10 p-0"}>
            {sidebarWidth > 140 && (
              <>
                <Image height={32} width={32} src={"/default-user.jpeg"} alt="avatar" className="size-8 rounded-full" />
                <span className="text-sm">Tutu tuku</span>
              </>
            )}
            <Button className="ml-auto size-9 p-0" variant="ghost" size="icon">
              <Icons.Logout className="size-5" />
            </Button>
          </div>
        </section>
      </div>
    </aside>
  )
}
