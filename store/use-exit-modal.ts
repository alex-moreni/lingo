import { create } from "zustand"

type ExitModalState = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useExitModal = create<ExitModalState>((set: any) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
