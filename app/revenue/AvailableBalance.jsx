import React from 'react'

async function AvailableBalance() {
  const res = await fetch("https://fe-task-api.mainstack.io/wallet", {
    next: { revalidate: 10000 },
  });
  const wallet = await res.json();
  // console.log(wallet);
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