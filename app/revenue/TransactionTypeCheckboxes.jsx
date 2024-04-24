"use client";

import React from "react";
import { Icon } from "@iconify-icon/react";
import { TRANSACTION_TYPES } from "../(store)/content/content";

function TransactionTypeCheckboxes({
  selectedTransactionTypes,
  setSelectedTransactionTypes,
}) {
  function checkAndUncheck(transactionType) {
    if (!selectedTransactionTypes.includes(transactionType)) {
      setSelectedTransactionTypes((oldIDArray) => [
        ...oldIDArray,
        transactionType,
      ]);
    }
    if (selectedTransactionTypes.includes(transactionType)) {
      setSelectedTransactionTypes((oldIDArray) =>
        oldIDArray.filter((type) => transactionType !== type)
      );
    }
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="absolute z-10  rounded bg-white shadow-md w-full border p-2 h-64   text-sm flex flex-col  gap-y-2 pb-10 overflow-y-auto scrollbar-hide"
    >
      {TRANSACTION_TYPES.map((transactionType) => (
        <div
          onClick={() => {
            checkAndUncheck(transactionType);
          }}
          key={transactionType}
          className="cursor-pointer flex items-center select-none p-4 gap-x-3 "
        >
          {/* //>checkbox */}
          <div className=" border border-gray-400 flex justify-center items-center w-fit cursor-pointer ">
            <Icon
              icon="typcn:tick"
              className={` text-base ${
                selectedTransactionTypes.includes(transactionType)
                  ? "visible bg-pry-color text-white"
                  : "invisible bg-transparent text-transparent"
              }`}
            />
          </div>{" "}
          {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
        </div>
      ))}
    </div>
  );
}

export default TransactionTypeCheckboxes;
