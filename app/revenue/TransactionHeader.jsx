import { fetchTransactions } from "@/utils";
import { Icon } from "@iconify-icon/react";
import React from "react";

async function TransactionHeader() {
  const transactions = await fetchTransactions();
  return (
    <div className="630:flex justify-between gap-x-5 shadow-sm">
      <div>
        <p className="text-lg lg:text-2xl font-bold">
          {transactions.length} Transactions
        </p>

        <p className="text-sm text-sec-color lg:font-medium">
          Your last ten transactions
        </p>
      </div>

      <div className="flex mt-2 630:mt-0 justify-end items-center gap-x-3 pb-6">
        <button className="py-3 pl-4 lg:pl-[30px] pr-3 lg:pr-[20px] text-base font-semibold gap-x-1 bg-[#EFF1F6] duration-300 hover:bg-gray-100 flex items-center rounded-full">
          Filter <Icon icon="mingcute:down-line" className=" text-xl" />
        </button>

        <button className="whitespace-nowrap py-3 pl-4 lg:pl-[30px] pr-3 lg:pr-[20px] text-base font-semibold gap-x-1 bg-[#EFF1F6] duration-300 hover:bg-gray-100 flex items-center rounded-full">
          Export List{" "}
          <Icon icon="material-symbols-light:download" className=" text-xl" />
        </button>
      </div>
    </div>
  );
}

export default TransactionHeader;
