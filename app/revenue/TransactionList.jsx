import React, { Suspense } from "react";
import TransactionHeader from "./TransactionHeader";
import { fetchTransactions, formatDateLongYear } from "@/utils";
import ListSkeleton from "./ListSkeleton";
import { Icon } from "@iconify-icon/react";

async function TransactionList() {
  const transactions = await fetchTransactions();
  return (
    <div>
      <Suspense fallback={<ListSkeleton />}>
        <TransactionHeader />

        <div className="mt-8  gap-x-8">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="mb-6 flex items-center justify-between"
            >
              <div className="flex items-center">
                {/* //> The circle */}
                <div
                  className={`rounded-full flex justify-center items-center w-12 h-12 mr-4 ${
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
                  <p className="text-base font-medium">
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
      </Suspense>
    </div>
  );
}

export default TransactionList;
