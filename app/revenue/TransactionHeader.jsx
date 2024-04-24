"use client";

import { Icon } from "@iconify-icon/react";
import React from "react";
import { generalStore } from "../(store)/zustand/generalStore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateParam } from "@/utils";

function TransactionHeader() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const {
    duplicateTransactions,
    setShowFilter,
    showFilter,
    filterList,
    setAllTransactions,filterCounter
  } = generalStore();

  return (
    <div className="630:flex justify-between gap-x-5 shadow-sm">
      <div>
        <p className="text-lg lg:text-2xl font-bold">
          {duplicateTransactions.length} Transactions
        </p>

        <p className="text-sm text-sec-color lg:font-medium">
          Your last ten transactions
        </p>
      </div>

      <div className="flex mt-2 630:mt-0 justify-end items-center gap-x-3 pb-6">
        <button
          onClick={() => {
            updateParam({
              key: "sc",
              value: "true",
              router,
              pathName,
              searchParams,
            });
            setShowFilter(!showFilter);
          }}
          className="py-3 pl-4 lg:pl-[30px] pr-3 lg:pr-[20px] text-base font-semibold gap-x-1 bg-[#EFF1F6] duration-300 hover:bg-gray-100 flex items-center rounded-full"
        >
          Filter{" "}
          {filterCounter > 0 && (
            <div className="w-5 h-5 bg-pry-color text-sm flex justify-center items-center text-white rounded-full">
              {filterCounter}
            </div>
          )}
          <Icon icon="mingcute:down-line" className=" text-xl" />
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
