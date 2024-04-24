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

    anyDayButAllTime: "allTime",
    setAnyDayButAllTime: (value) => set({ anyDayButAllTime: value }),

    filterCounter: 0,
    setFilterCounter: (value) => set({ filterCounter: value }),

    selectedTransactionStatus: [],
    setSelectedTransactionStatus: (value) =>
      set({ selectedTransactionStatus: value }),

    selectedTransactionTypes: [],
    setSelectedTransactionTypes: (value) =>
      set({ selectedTransactionTypes: value }),
  };
});
