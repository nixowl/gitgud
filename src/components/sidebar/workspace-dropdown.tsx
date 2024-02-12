"use client"

import { useRef, useState } from "react"
import { useCreateWorkspaceModal } from "@/hooks/context/context"
import { useClickOutside } from "@/hooks/useClickOutside"
import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import { Button } from "../ui/button"

type WorkspaceDropdownProps = {
  sidebarWidth: number
}

export function WorkspaceDropdown({ sidebarWidth }: WorkspaceDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  useClickOutside(dropdownRef, () => setIsOpen(false), buttonRef)
  const { open } = useCreateWorkspaceModal()
  return (
    <section className="relative flex w-full items-center justify-center border-t border-border p-4">
      <Button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        size={sidebarWidth > 140 ? "sm" : "icon"}
        variant="secondary"
        className={cn("w-full border border-border", 140 > sidebarWidth && "h-8 w-10 justify-center")}
      >
        <Icons.Workspace className={cn("h-5 w-5", sidebarWidth > 140 && "mr-2")} />
        <span className={sidebarWidth > 140 ? "" : "hidden"}> Workspace </span>

        <Icons.ChevronDown
          className={cn(
            "tranisition-transform ml-auto h-5 w-5  duration-300",
            isOpen && "rotate-180",
            140 > sidebarWidth && "hidden"
          )}
        />
      </Button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-4 top-[3.75rem] z-20 grid w-[13.75rem] rounded-md border border-border bg-card shadow-md"
        >
          <div className="grid gap-1.5 border-b border-border p-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Button key={i} onClick={() => setIsOpen(!isOpen)} variant="ghost" className="justify-start">
                <Icons.Workspace className={cn("h-5 w-5", sidebarWidth > 140 && "mr-2")} />
                <span className={sidebarWidth > 140 ? "" : "hidden"}> Workspace </span>
              </Button>
            ))}
          </div>
          <Button onClick={open} className="w-full rounded-none rounded-b-md" variant="ghost">
            <Icons.Plus className="mr-2 size-5" />
            New Workspace
          </Button>
        </div>
      )}
    </section>
  )
}
