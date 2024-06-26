"use client";

import React from "react";
import { Icon } from "@iconify-icon/react";
import { TRANSACTION_STATUS } from "../(store)/content/content";
import { generalStore } from "../(store)/zustand/generalStore";

function TransactionStatusCheckboxes() {
  const { selectedTransactionStatus, setSelectedTransactionStatus } =
    generalStore();

  function checkAndUncheck(transactionStatus) {
    if (!selectedTransactionStatus.includes(transactionStatus)) {
      setSelectedTransactionStatus([
        ...selectedTransactionStatus,
        transactionStatus,
      ]);
    }
    if (selectedTransactionStatus.includes(transactionStatus)) {
      let duplicateArray = [...selectedTransactionStatus];
      let filteredDuplicate = duplicateArray.filter(
        (status) => transactionStatus !== status
      );
      setSelectedTransactionStatus(filteredDuplicate);
    }
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="absolute z-[9]  rounded bg-white shadow-md w-full border p-2 h-52   text-sm flex flex-col  gap-y-2 pb-10 overflow-y-auto scrollbar-hide"
    >
      {TRANSACTION_STATUS.map((transactionStatus) => (
        <div
          onClick={() => {
            checkAndUncheck(transactionStatus);
          }}
          key={transactionStatus}
          className="cursor-pointer hover:bg-gray-100 rounded-md flex items-center select-none p-4 gap-x-3 "
        >
          {/* //>checkbox */}
          <div className="rounded-md border border-gray-400 flex justify-center items-center w-fit cursor-pointer ">
            <Icon
              icon="typcn:tick"
              className={` text-base ${
                selectedTransactionStatus.includes(transactionStatus)
                  ? "visible bg-pry-color text-white"
                  : "invisible bg-transparent text-transparent"
              }`}
            />
          </div>{" "}
          {transactionStatus.charAt(0).toUpperCase() +
            transactionStatus.slice(1)}
        </div>
      ))}
    </div>
  );
}

export default TransactionStatusCheckboxes;
