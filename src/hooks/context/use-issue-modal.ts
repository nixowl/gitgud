import { create } from "zustand"

type IssueModalState = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useIssueModal = create<IssueModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
