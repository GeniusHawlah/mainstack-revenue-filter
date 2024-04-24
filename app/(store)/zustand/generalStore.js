import { create } from "zustand";

export const generalStore = create((set) => {
  return {
    menuIsClicked: false,
    setMenuIsClicked: (value) => set({ menuIsClicked: value }),

    user: {},
    setUser: (value) => set({ user: value }),

    allTransactions: [],
    setAllTransactions: (value) => set({ allTransactions: value }),

    duplicateTransactions: [],
    setDuplicateTransactions: (value) => set({ duplicateTransactions: value }),

    showFilter: false,
    setShowFilter: (value) => set({ showFilter: value }),

    filterData: {
      startDate: "",
      endDate: "",
      specificRange: "allTime",
    },
    setFilterData: (value) => set({ filterData: value }),


    pastDays: "allTime",
    setPastDays: (value) => set({ pastDays: value }),
  };
});
