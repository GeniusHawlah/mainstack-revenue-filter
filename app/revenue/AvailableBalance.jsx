import { fetchWallet } from '@/utils';
import React from 'react'

async function AvailableBalance() {
  const wallet = await fetchWallet()
  return (
    <div>
    <p className="font-medium text-sm text-sec-color">
      Available Balance
    </p>
    <p className="mt-2 font-bold text-4xl text-pry-color">
      USD {wallet.balance}
    </p>
  </div>
  )
}

export default AvailableBalance