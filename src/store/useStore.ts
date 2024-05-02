import { create } from "zustand";

type Store = {
  address: string;
  lastname: string;
  firstname: string;
  setAddress: (value: string) => void;
  setLastname: (value: string) => void;
  setFirstname: (value: string) => void;
};

export const useStore = create<Store>()((set) => ({
  address: "",
  lastname: "",
  firstname: "",
  setAddress: (address) => set(() => ({ address })),
  setLastname: (lastname) => set(() => ({ lastname })),
  setFirstname: (firstname) => set(() => ({ firstname })),
}));
