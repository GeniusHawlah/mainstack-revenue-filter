// "use client"

import LineChart from "../components/LineChart";
import AvailableBalance from "./AvailableBalance";
import OtherWalletInfo from "./OtherWalletInfo";

export default async function Revenue() {

  return (
    <main className="pl-28 pt-16 pr-10 sm:pr-14 md:pr-20 lg:pr-28 xl:pr-[140px] ">
      <div className="flex justify-center  gap-x-8 sm:gap-x-16 md:gap-x-20 lg:gap-x-24 xl:gap-x-[7.75rem]">
        {/* //>Chart and balance */}
        <div className="w-[765px] h-[257px]">
          <div className="mb-2 flex items-center gap-x-16">
            <AvailableBalance />
            <button className="px-7 py-[14px]  bg-pry-color text-white divide-red-300 hover:bg-opacity-80 rounded-full text-base font-semibold">Withdraw</button>
          </div>
          <LineChart />
        </div>

        <div className="max-w-[271px] whitespace-nowrap">
        <OtherWalletInfo/>
        </div>
      </div>
    </main>
  );
}
