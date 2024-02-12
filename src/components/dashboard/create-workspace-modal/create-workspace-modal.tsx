"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Modal } from "@/components/ui/modal"
import { Textarea } from "@/components/ui/textarea"
import { useCreateWorkspaceModal } from "@/hooks/context/context"

export function CreateWorkspaceModal() {
  const { isOpen, close } = useCreateWorkspaceModal()

  return (
    <Modal className="px-12 pb-8 pt-12 md:min-w-96 lg:min-w-[40rem]" isOpen={isOpen} onClose={close}>
      <form className="grid gap-3">
        <div className="grid gap-1.5">
          <label className="text-sm font-semibold"> Name </label>
          <Input type="text" id="name" name="name" placeholder="Very cool useful workspace title" />
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-semibold">Slug</label>
          <Input type="text" id="slug" name="slug" placeholder="very-cool-useful-workspace-title" />
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-semibold">Description</label>
          <Textarea id="description" name="description" placeholder="Very cool useful workspace description" />
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-semibold">Website</label>
          <Input type="text" id="website" name="website" placeholder="https://very-cool-useful-workspace.com" />
        </div>

        <div className="grid gap-1.5">
          <label className="text-sm font-semibold">Logo</label>
        </div>

        <Button className="mt-2 w-full" type="submit">
          Create Workspace
        </Button>
      </form>
    </Modal>
  )
}
