"use client"

import { Button } from "@/components/ui/button"
import { useIssueModal } from "@/hooks/context/context"

export default function WorkspacePage() {
  const { open } = useIssueModal()
  return (
    <div>
      <h2>
        Home
        <Button onClick={open}>Create Issue</Button>
      </h2>
    </div>
  )
}
