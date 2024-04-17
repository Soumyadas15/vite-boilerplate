import { create } from "zustand";

export type UtilityType = "mobileNav";

interface UtilityStore {
    type: UtilityType | null;
    isOpen: boolean;
    onOpen: (type: UtilityType) => void;
    onClose: () => void;
}

export const useUtility = create<UtilityStore>((set) => ({
    type: null,
    isOpen: false,
    onOpen: (type) => set({ type, isOpen: true }),
    onClose: () => set({ type: null, isOpen: false }),
}))