"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { CreateIssueModal } from "@/components/dashboard/create-issue-modal/craete-issue-modal"
import { CreateWorkspaceModal } from "@/components/dashboard/create-workspace-modal/create-workspace-modal"
import { Sidebar } from "@/components/sidebar/sidebar"
import { cn } from "@/lib/utils"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const minColumnWidthRem = 4
  const maxColumnWidthRem = 15
  const remInPx = 16
  const minWidthInPx = minColumnWidthRem * remInPx
  const maxWidthInPx = maxColumnWidthRem * remInPx
  const gridElement = useRef<HTMLDivElement>(null)
  const [sidebarWidth, setSidebarWidth] = useState(parseInt(localStorage.getItem("sidebarWidth") ?? "252"))

  useEffect(() => {
    const handleResize = () => {
      if (gridElement.current) {
        gridElement.current.style.gridTemplateColumns = localStorage.getItem("gridSplitPosition") ?? ""
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const startResize = () => {
    const resize = (event: MouseEvent) => {
      if (!gridElement.current) return
      const currentX = event.clientX - gridElement.current.getBoundingClientRect().left
      const firstColumnWidth = Math.max(minWidthInPx, Math.min(currentX, maxWidthInPx) + 12)

      gridElement.current.style.gridTemplateColumns = `${firstColumnWidth}px 2px 1fr`
      console.log(firstColumnWidth)
      localStorage.setItem("gridSplitPosition", gridElement.current.style.gridTemplateColumns)
      localStorage.setItem("sidebarWidth", firstColumnWidth.toString())
      setSidebarWidth(firstColumnWidth)
    }

    const stopResize = () => {
      window.removeEventListener("mousemove", resize)
      window.removeEventListener("mouseup", stopResize)
      localStorage.setItem("gridSplitPosition", gridElement.current?.style?.gridTemplateColumns ?? "")
    }

    window.addEventListener("mousemove", resize)
    window.addEventListener("mouseup", stopResize)
  }

  console.log("sidebarWidth", sidebarWidth)

  return (
    <div ref={gridElement} className={cn("flex w-full flex-1 overflow-auto lg:grid lg:grid-cols-[252px,2px,1fr]")}>
      <Sidebar sidebarWidth={sidebarWidth} />
      <CreateIssueModal />
      <CreateWorkspaceModal />
      <button className="hidden cursor-col-resize border-l border-border lg:block" onMouseDown={startResize} />
      {children}
    </div>
  )
}
