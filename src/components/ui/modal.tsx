import { ReactNode, useRef, useState } from "react"
import { useClickOutside } from "@/hooks/useClickOutside"

import { cn } from "../../lib/utils"
import { Icons } from "../icons"
import { Button } from "./button"

type ModalProps = {
  className?: string
  children: ReactNode
  onClose: () => void
  isOpen: boolean
}

const modal = ({ className, children, onClose, isOpen }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, onClose)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-background/70 backdrop-blur-sm">
          <div className="relative mx-auto flex h-full w-full items-end md:h-auto md:w-4/6 lg:h-auto lg:w-auto">
            <div
              className={cn(
                "relative h-fit w-full flex-col items-end rounded-t-3xl border border-border bg-card shadow-lg md:h-auto  md:rounded-xl  lg:h-auto lg:w-auto",
                className
              )}
              ref={ref}
            >
              <Button size="icon" variant="ghost" className="absolute right-2 top-2" onClick={onClose}>
                <Icons.Close className="h-7 w-7 text-muted-foreground" />
              </Button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default modal
