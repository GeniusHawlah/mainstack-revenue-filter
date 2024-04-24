// "use client"

import LineChart from "./LineChart";
import AvailableBalance from "./AvailableBalance";
import OtherWalletInfo from "./OtherWalletInfo";
import TransactionList from "./TransactionList";

export default async function Revenue({ searchParams }) {
  
  return (
    <div
      className={`px-[70px] lg:px-[140px] mt-16`}
    >
      <div className="630:flex justify-between  gap-x-8 !overflow-y-hidden`">
        {/* //>Chart and balance */}
        <div className="630:w-[65%]">
          <div className="mb-2 flex items-center gap-x-16">
            <AvailableBalance />
            <button className="px-4 lg:px-7 py-2 lg:py-[14px]  bg-pry-color text-white divide-red-300 hover:bg-opacity-80 rounded-full text-base font-semibold">
              Withdraw
            </button>
          </div>

          <LineChart />
        </div>

        <div className="630:w-[35%] mt-8 630:mt-0 whitespace-nowrap">
          <OtherWalletInfo />
        </div>
      </div>

      <div className="mt-20">
        <TransactionList />
      </div>
    </div>
  );
}
