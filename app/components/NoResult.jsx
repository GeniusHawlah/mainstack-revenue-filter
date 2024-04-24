import { Icon } from "@iconify-icon/react";
import React from "react";
import { generalStore } from "../(store)/zustand/generalStore";
import { filterTransactions } from "@/utils";

function NoResult() {
  const {
    allTransactions,
    setDuplicateTransactions,
    setSelectedTransactionTypes,
    setSelectedTransactionStatus,
    setAnyDayButAllTime,
    setFilterData,
  } = generalStore();

  return (
    <div className="bg-white flex justify-center w-full h-full">
      <div className="mt-16">
        <div className="bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center">
          <Icon icon="majesticons:paper-fold-text-line" className="text-2xl" />
        </div>

        <p className="mt-5 text-2xl font-bold text-pry-color">
          No transaction found.
        </p>

        <p className="mt-[10px] text-base font-medium text-sec-color">
          Carry out some transactions or change your filter.
        </p>

        <button
          onClick={() => {
            setDuplicateTransactions(
              filterTransactions({
                transactionList: allTransactions,
                type: [],
                status: [],
                startDate: "",
                endDate: "",
                specificRange: "allTime",
              })
            );

            setSelectedTransactionTypes([]);
            setSelectedTransactionStatus([]);
            setFilterData({
              startDate: "",
              endDate: "",
              specificRange: "allTime",
            });
            setAnyDayButAllTime("allTime");
          }}
          className="px-6 py-3 bg-gray-100 hover:bg-gray-200 duration-300 rounded-full text-base text-pry-color font-semibold mt-8"
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}

export default NoResult;
