import { create } from "zustand";

interface useClientModalInterface{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useClientModal = create<useClientModalInterface>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));