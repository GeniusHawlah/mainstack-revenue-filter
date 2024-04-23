export function formatDate(dateString) {
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  const dateParts = dateString.split("-");
  const year = dateParts[0].substring(2);
  const monthIndex = parseInt(dateParts[1]) - 1; // Month index starts from 0
  const day = parseInt(dateParts[2]);

  const month = months[monthIndex];

  // Adding "st", "nd", "rd", or "th" to the day
  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }

  return `${month} ${day}${daySuffix}, ${year}`;
}

export function formatDateLongYear(dateString) {
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  const dateParts = dateString.split("-");
  const year = dateParts[0];
  const monthIndex = parseInt(dateParts[1]) - 1; // Month index starts from 0
  const day = parseInt(dateParts[2]);

  const month = months[monthIndex];

  // Adding "st", "nd", "rd", or "th" to the day
  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st";
  } else if (day === 2 || day === 22) {
    daySuffix = "nd";
  } else if (day === 3 || day === 23) {
    daySuffix = "rd";
  } else {
    daySuffix = "th";
  }

  return `${month} ${day}${daySuffix}, ${year}`;
}

export async function fetchWallet() {
  const res = await fetch(`${process.env.BASE_URL}wallet`, {
    next: { revalidate: 10000 },
  });
  const wallet = await res.json();
  return wallet;
}

export async function fetchTransactions() {
  const res = await fetch(`${process.env.BASE_URL}transactions`, {
    next: { revalidate: 10000 },
  });
  const transactions = await res.json();
  // console.log(transactions);
  return transactions;
}

export async function fetchUser() {
  const res = await fetch(`${process.env.BASE_URL}user`, {
    next: { revalidate: 10000 },
  });
  const user = await res.json();
  return user;
}

export async function fetchTransactionsClientSide() {
  try {
    const res = await fetch(`/revenue/transactions-endpoint`);
    const transactions = await res.json();
    // console.log(transactions);
    return transactions;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUserClientSide() {
  try {
    const res = await fetch(`/revenue/user-endpoint`);
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.log(error);
  }
}

export function filterTransactions({
  transactionList,
  type,
  status,
  startDate,
  endDate,
  specificRange,
}) {
  const today = new Date();
  switch (specificRange) {
    case "today":
      startDate = endDate = today.toISOString().slice(0, 10);
      break;
    case "last7days":
      startDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 6
      )
        .toISOString()
        .slice(0, 10);
      endDate = today.toISOString().slice(0, 10);
      break;
    case "thisMonth":
      startDate = new Date(today.getFullYear(), today.getMonth(), 1)
        .toISOString()
        .slice(0, 10);
      endDate = today.toISOString().slice(0, 10);
      break;
    case "last3Months":
      startDate = new Date(today.getFullYear(), today.getMonth() - 2, 1)
        .toISOString()
        .slice(0, 10);
      endDate = today.toISOString().slice(0, 10);
      break;
    case "thisYear":
      startDate = new Date(today.getFullYear(), 0, 1)
        .toISOString()
        .slice(0, 10);
      endDate = today.toISOString().slice(0, 10);
      break;
    case "lastYear":
      startDate = new Date(today.getFullYear() - 1, 0, 1)
        .toISOString()
        .slice(0, 10);
      endDate = new Date(today.getFullYear() - 1, 11, 31)
        .toISOString()
        .slice(0, 10);
      break;
    case "allTime":
      startDate = endDate = null;
      break;
    default:
      break;
  }

  return transactionList.filter((transaction) => {
    // Check transaction type
    if (type && type.length > 0 && !type.includes(transaction.type)) {
      return false;
    }

    // Check transaction status
    if (status && status.length > 0 && !status.includes(transaction.status)) {
      return false;
    }

    // Check date range
    if (startDate && endDate) {
      const transactionDate = new Date(transaction.date);
      if (
        transactionDate < new Date(`${startDate}`) ||
        transactionDate > new Date(`${endDate}T23:59:59`)
      ) {
        return false;
      }
    }

    return true;
  });
}

export function updateParam({ key, value, router, pathName, searchParams }) {
  const current = new URLSearchParams(Array.from(searchParams.entries()));
  current.set(key, value);
  const search = current.toString();
  const query = !value || !key ? "" : `?${search}`;
  router.push(`${pathName}${query}`);
}


