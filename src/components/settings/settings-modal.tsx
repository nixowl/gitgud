"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

import Modal from "../ui/modal"
import { ChangeWorkspaceData } from "./change-workspace-data"
import { ChangeWorkspaceImage } from "./change-workspace-image"
import { DeleteWorkspaceModal } from "./delete-workspace-modal"

type TabsType = "General" | "Picture" | "Delete"

type ModalProps = {
  isOpen: boolean
  close: () => void
}
export function SettingsModal({ isOpen, close }: ModalProps) {
  const [activeTab, setActiveTab] = useState<TabsType>("General")
  return (
    <Modal
      className="flex flex-col items-center gap-4 px-12 pb-8 pt-8 md:min-w-96 lg:w-[40rem]"
      isOpen={isOpen}
      onClose={close}
    >
      <article className="flex w-fit items-center justify-center gap-5 rounded-md bg-secondary p-1.5">
        <button
          className={cn("rounded-sm px-4 py-1 text-sm font-semibold", activeTab === "General" && "bg-popover")}
          onClick={() => setActiveTab("General")}
        >
          General
        </button>
        <button
          className={cn("rounded-sm px-4 py-1 text-sm font-semibold", activeTab === "Picture" && "bg-popover")}
          onClick={() => setActiveTab("Picture")}
        >
          Picture
        </button>
        <button
          className={cn("rounded-sm px-4 py-1 text-sm font-semibold", activeTab === "Delete" && "bg-popover")}
          onClick={() => setActiveTab("Delete")}
        >
          Delete
        </button>
      </article>
      {activeTab === "General" && <ChangeWorkspaceData />}
      {activeTab === "Picture" && <ChangeWorkspaceImage />}
      {activeTab === "Delete" && <DeleteWorkspaceModal />}
    </Modal>
  )
}
