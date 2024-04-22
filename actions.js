// "use server";

// export async function fetchTransactions() {
//   const res = await fetch("https://fe-task-api.mainstack.io/transactions", {
//     next: { revalidate: 10000 },
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const transactions = await res.json();
//   return transactions;
// }

// export async function fetchWallet() {
//   const res = await fetch("https://fe-task-api.mainstack.io/wallet", {
//     next: { revalidate: 10000 },
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const wallet = await res.json();
//   return wallet;
// }

// export async function fetchUser() {
//   const res = await fetch("https://fe-task-api.mainstack.io/user", {
//     next: { revalidate: 10000 },
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const user = await res.json();
//   return user;
// }
