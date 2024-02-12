"use client"

import { Button } from "@/components/ui/button"
import { useIssueModal } from "@/hooks/context/context"

export default function DashboardTempPage() {
  const { open } = useIssueModal()
  return (
    <div>
      DashboardPage
      <Button onClick={open}>Create Issue</Button>
    </div>
  )
}
