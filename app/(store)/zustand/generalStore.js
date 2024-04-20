import { create } from "zustand";

export const generalStore = create((set) => {
  return {
    isLoggedIn: false,
    setIsLoggedIn: (value) => set(() => ({ isLoggedIn: value })),

    showPostReviewOverlay: false,
    setShowPostReviewOverlay: (value) =>
      set(() => ({ showPostReviewOverlay: value })),

  
  };
});
