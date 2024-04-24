"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { fetchTransactionsClientSide, formatDate } from "@/utils";
import ChartSkeleton from "../components/ChartSkeleton";
import { generalStore } from "../(store)/zustand/generalStore";

Chart.register(...registerables);

const LineChart = () => {
  const {allTransactions, setAllTransactions, setDuplicateTransactions, duplicateTransactions} = generalStore()
  const [pending, setPending] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setPending(true);
        const data = await fetchTransactionsClientSide();
        setAllTransactions(data.transactions);
        setDuplicateTransactions(data.transactions);
        setPending(false);
      } catch (error) {
        setPending(false);
      }
    };
    fetchData();
  }, []);



  const data = {
    labels:  duplicateTransactions
      .slice(0, 10)
      .map((transaction) => formatDate(transaction.date)),
    datasets: [
      {
        label: "Amount",
        data:  duplicateTransactions
          .slice(0, 10)
          .map((transaction) => transaction.amount)  ,
        // fill: false,
        borderColor: "rgb(249, 137, 137)",
        tension: 1,

        borderWidth: 1,
        pointRadius: 0.7,
        pointHoverRadius: 5,
        borderJoinStyle: "round",
      },
    ],
  };

   const emptyData = {
    labels:  ["Date", "Date","Date","Date","Date","Date","Date","Date","Date","Date"],
    datasets: [
      {
        label: "Amount",
        data:   [1, 1,1,1,1,1,1,1,1,1]  ,
        // fill: false,
        borderColor: "rgb(249, 137, 137)",
        tension: 1,

        borderWidth: 1,
        pointRadius: 0.7,
        pointHoverRadius: 5,
        borderJoinStyle: "round",
      },
    ],
  };

  const options = {
    // responsive: true,
    // maintainAspectRatio: false,
    // aspectRatio: 1,
    scales: {
      x: {
        labels:  [
          duplicateTransactions
            .slice(0, 10)
            .map((transaction) => formatDate(transaction.date))[0],
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          duplicateTransactions
            .slice(0, 10)
            .map((transaction) => formatDate(transaction.date))[
              duplicateTransactions.slice(0, 10).length - 1
          ],
        ] , // Showing the first and last labels only

        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

    const emptyOptions = {
    // responsive: true,
    // maintainAspectRatio: false,
    // aspectRatio: 1,
    scales: {
      x: {
        labels:  [
         "Date",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "Date",
        ] , // Showing the first and last labels only

        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  if (!pending && duplicateTransactions.length > 0) {
    return <Line data={data} options={options} className="!w-full " />;
  }

  if (pending && duplicateTransactions.length === 0) {
    return <ChartSkeleton />;
  }

  if (!pending && duplicateTransactions.length === 0) {
    return <Line data={emptyData} options={emptyOptions} className="!w-full " />
   }
};

export default LineChart;
