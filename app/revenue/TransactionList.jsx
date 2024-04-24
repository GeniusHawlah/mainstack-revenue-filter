"use client";

import React, { Suspense, useEffect, useState } from "react";
import TransactionHeader from "./TransactionHeader";
import { v4 as uuidv4 } from "uuid";
import {
  fetchTransactionsClientSide,
  filterTransactions,
  formatDateLongYear,
} from "@/utils";
import ListSkeleton from "../components/ListSkeleton";
import { Icon } from "@iconify-icon/react";
import { generalStore } from "../(store)/zustand/generalStore";

function TransactionList() {
  const [pending, setPending] = useState(false);
  const {
    allTransactions,
    setAllTransactions,
    duplicateTransactions,
    setDuplicateTransactions,
  } = generalStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPending(true);
        const data = await fetchTransactionsClientSide();
        setAllTransactions(data.transactions);
        setDuplicateTransactions(data.transactions);
        setPending(false);
      } catch (error) {
        setPending(false);
      }
    };
    fetchData();
  }, []);

  // if (!pending && duplicateTransactions.length > 0) {
  return (
    <div>
      <Suspense>
        <TransactionHeader />
      </Suspense>

      {!pending && duplicateTransactions.length > 0 && (
        <div className="mt-8  gap-x-8">
          {duplicateTransactions.map((transaction) => (
            <div
              key={uuidv4()}
              className="mb-6 flex items-center justify-between"
            >
              <div className="flex items-center">
                {/* //> The circle */}
                <div
                  className={`rounded-full flex justify-center items-center w-12 h-12 min:w-12 min:h-12 mr-4 ${
                    transaction.type === "deposit"
                      ? "bg-[#E3FCF2] text-green-600"
                      : "bg-[#F9E3E0] text-red-600"
                  }`}
                >
                  <Icon
                    icon={
                      transaction.type === "deposit"
                        ? "teenyicons:bottom-left-solid"
                        : "teenyicons:top-right-solid"
                    }
                  />
                </div>

                {/* //> Name and status */}
                <div>
                  <p
                    // onClick={() => {

                    // }}
                    className="text-base font-medium"
                  >
                    {transaction.type === "deposit"
                      ? transaction?.metadata?.product_name ||
                        "Un-named Deposit"
                      : "Cash Withdrawal"}
                  </p>

                  <p
                    className={`text-sm font-medium mt-2  ${
                      transaction.type === "withdrawal" &&
                      transaction?.status === "pending"
                        ? "text-yellow-500"
                        : transaction.type === "withdrawal" &&
                          transaction?.status === "successful"
                        ? "text-green-600"
                        : transaction.type === "withdrawal"
                        ? "text-red-600"
                        : "text-gray-400"
                    }`}
                  >
                    {transaction.type === "deposit"
                      ? transaction?.metadata?.name || "Anonymous"
                      : transaction?.status.charAt(0).toUpperCase() +
                        transaction?.status.slice(1)}
                  </p>
                </div>
              </div>

              <div className="">
                <p className="text-base font-bold text-pry-color text-right">
                  USD {transaction?.amount}
                </p>

                <p className="text-sm text-right font-medium mt-1 text-gray-400">
                  {formatDateLongYear(transaction.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {pending && duplicateTransactions.length === 0 && <ListSkeleton />}
    </div>
  );
  // }

  // if (pending && duplicateTransactions.length === 0) {
  //   return <ListSkeleton />;
  // }
}

export default TransactionList;
