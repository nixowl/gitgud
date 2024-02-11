import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useClickOutside } from "@/hooks/useClickOutside"
import { cn } from "@/lib/utils"

import { priorityArr } from "."

export function SelectPriority() {
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
        Priority
      </Button>

      {dropdown && (
        <div
          ref={contentRef}
          className="absolute z-20 mt-1 grid w-32 gap-1.5 rounded-lg border border-border bg-card p-1.5 shadow-lg"
        >
          {priorityArr.map((status, index) => (
            <Button size="sm" variant="ghost" type="button" key={index} className="h-8 w-full justify-start">
              <span
                className={cn("mr-2 flex size-[1.2rem] items-center justify-center rounded-sm text-xs", status.color)}
              >
                {status.number}
              </span>
              <span className="text-xs">{status.title}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
