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
    case "last7Days":
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
      startDate = startDate;
      endDate = endDate;
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

export const customTheme = {
  root: {
    base: "relative",
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2 ",
      inline: "relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700",
    },
    header: {
      base: "",
      title:
        "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
      selectors: {
        base: "mb-2 flex justify-between",
        button: {
          base: "rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
          prev: "",
          next: "",
          view: "",
        },
      },
    },
    view: {
      base: "p-1",
    },
    footer: {
      base: "mt-2 flex space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-pry-color",
        today:
          "bg-pry-color text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-pry-color",
        clear:
          "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
      },
    },
  },
  views: {
    days: {
      header: {
        base: "mb-1 grid grid-cols-7",
        title:
          "h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400",
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-full border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
          selected: "bg-pry-color text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-pry-color text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-pry-color text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-pry-color text-white hover:bg-cyan-600",
          disabled: "text-gray-500",
        },
      },
    },
  },
};

export function dateToDisplay(dateString) {
  const date = new Date(dateString);

  // Get the day, month, and year
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}

export function formatArray(array) {
  // Function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Capitalize the first letter of each element
  let capitalized_array = array.map(capitalizeFirstLetter);

  // Joining the elements with commas and spaces
  let formatted_string = capitalized_array.join(", ");

  return formatted_string;
}
