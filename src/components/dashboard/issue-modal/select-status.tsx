import { useRef, useState } from "react"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useClickOutside } from "@/hooks/useClickOutside"

import { statusArr } from "."

export function SelectStatus() {
  const [dropdown, setDropdown] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  useClickOutside(contentRef, () => setDropdown(false), triggerRef)
  return (
    <div className="relative">
      <Button
        ref={triggerRef}
        onClick={() => setDropdown(!dropdown)}
        type="button"
        variant="outline"
        size="sm"
        className="h-7"
      >
        <Icons.TodoStatus className="mr-2 size-4" />
        Status
      </Button>

      {dropdown && (
        <div
          ref={contentRef}
          className="absolute z-20 mt-1 grid w-32 gap-1.5 rounded-lg border border-border bg-card p-1.5 shadow-lg"
        >
          {statusArr.map((status, index) => (
            <Button size="sm" variant="ghost" type="button" key={index} className="h-8 w-full justify-start">
              <status.icon className="mr-2 size-4" />
              <span className="text-xs">{status.title}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
