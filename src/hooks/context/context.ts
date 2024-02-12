import { create } from "zustand"

type ModalStates = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useIssueModal = create<ModalStates>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))

export const useCreateWorkspaceModal = create<ModalStates>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
