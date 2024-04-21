import { create } from "zustand";

export const generalStore = create((set) => {
  return {
    menuIsClicked: false,
    setMenuIsClicked: (value) => set({ menuIsClicked: value }),
  };
});
