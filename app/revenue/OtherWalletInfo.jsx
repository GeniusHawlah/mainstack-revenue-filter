import React from "react";
import InfoIcon from "./InfoIcon";
import { fetchWallet } from "@/utils";

async function OtherWalletInfo() {
const wallet = await fetchWallet()
  return (
    <div>
      {/* //> */}
      <div>
        <div className="flex justify-between  gap-x-7 lg:gap-x-24  text-sec-color">
          <p className="font-medium text-sm text-sec-color">Ledger Balance</p>
          {<InfoIcon toolTipText="You ledger balance." />}
        </div>
        <p className="mt-2 font-bold text-xl text-pry-color">
          USD {wallet.ledger_balance}
        </p>
      </div>
      {/* //> */}
      <div className="mt-8">
        <div className="flex justify-between  gap-x-7 lg:gap-x-24  text-sec-color">
          <p className="font-medium text-sm text-sec-color">Total Payout</p>
          {<InfoIcon toolTipText="You total balance." />}
        </div>
        <p className="mt-2 font-bold text-xl text-pry-color">
          USD {wallet.total_payout}
        </p>
      </div>
      {/* //> */}
      <div className="mt-8">
        <div className="flex justify-between  gap-x-7 lg:gap-x-24  text-sec-color">
          <p className="font-medium text-sm text-sec-color">Total Revenue</p>
          {<InfoIcon toolTipText="You total revenue." />}
        </div>
        <p className="mt-2 font-bold text-xl text-pry-color">
          USD {wallet.total_revenue}
        </p>
      </div>

      {/* //> */}
      <div className="mt-8">
        <div className="flex justify-between  gap-x-7 lg:gap-x-24  text-sec-color">
          <p className="font-medium text-sm text-sec-color">Pending Revenue</p>
          {<InfoIcon toolTipText="You pending payout." />}
        </div>
        <p className="mt-2 font-bold text-xl text-pry-color">
          USD {wallet.pending_payout}
        </p>
      </div>
    </div>
  );
}

export default OtherWalletInfo;
