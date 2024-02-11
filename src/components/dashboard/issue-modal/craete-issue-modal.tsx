"use client"

import { useState } from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { Skeleton } from "@/components/ui/skeleton"
import { useIssueModal } from "@/hooks/context/use-issue-modal"
import { cn } from "@/lib/utils"

import { SelectPriority } from "./select-priority"
import { SelectStatus } from "./select-status"

export function CreateIssueModal() {
  const { close, isOpen } = useIssueModal()
  const [createMore, setCreateMore] = useState<boolean>(false)
  return (
    <Modal isOpen={isOpen} onClose={close} className="py-2 md:min-w-96 lg:min-w-[40rem]">
      <div className="flex items-center justify-start px-4 pb-3 pt-2">
        <Button variant="secondary" size="sm" className="h-6 px-2 py-0.5">
          <Skeleton className="size-5 rounded-full" />
          <span className="ml-1 truncate text-xs text-muted-foreground">Placeholder</span>
        </Button>
        <span className="ml-1 text-xs text-muted-foreground"> / Create issue </span>
      </div>
      <form>
        <div className="flex h-full flex-col justify-between">
          <div className="grid gap-3">
            <div className="grid gap-1.5 px-4">
              <input
                className="m-0 w-full appearance-none border-none bg-transparent p-0 leading-normal outline-none"
                type="text"
                id="title"
                name="title"
                placeholder="We need a new feature... (Title)"
              />
            </div>
            <div className="grid gap-1.5 px-4">
              <textarea
                className="m-0 min-h-36 w-full resize-none appearance-none overflow-scroll border-none bg-transparent p-0 leading-normal outline-none"
                id="description"
                name="description"
                placeholder="So that we can do something... (Description)"
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-start gap-1.5 px-2">
            <SelectStatus />
            <SelectPriority />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-border px-2 pt-2">
          <Button variant="ghost" size="icon">
            <Icons.Attachment className="size-5" />
          </Button>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-1.5">
              <button
                type="button"
                onClick={() => setCreateMore(!createMore)}
                className={cn(
                  "relative h-4 w-7 rounded-full p-0.5",
                  createMore ? "bg-primary" : "bg-slate-300 dark:bg-slate-800"
                )}
              >
                <span
                  className={cn(
                    "absolute left-0.5 top-0.5 z-10 h-3 w-3 rounded-full bg-white transition-all duration-300 ease-in-out",
                    createMore ? "translate-x-full" : "translate-x-0"
                  )}
                ></span>
              </button>
              <span className="text-xs text-muted-foreground"> Create more </span>
            </div>
            <Button type="submit" size="sm" className="px-4">
              Create
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
