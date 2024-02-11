import type { ReactNode } from "react"
import { CreateIssueModal } from "@/components/dashboard/issue-modal/craete-issue-modal"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <CreateIssueModal />
      {children}
    </div>
  )
}
