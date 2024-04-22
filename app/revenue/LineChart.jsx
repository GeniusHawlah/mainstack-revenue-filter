"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { fetchTransactionsClientSide, formatDate } from "@/utils";
import ChartSkeleton from "./ChartSkeleton";

Chart.register(...registerables);

const LineChart = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setPending(true);
        const data = await fetchTransactionsClientSide();
        setAllTransactions(data.transactions);
        setPending(false);
      } catch (error) {
        setPending(false);
      }
    };
    fetchData();
  }, []);

  // Sample data
  const data = {
    labels: allTransactions
      .slice(0, 10)
      .map((transaction) => formatDate(transaction.date)),
    datasets: [
      {
        label: "Balance",
        data: allTransactions
          .slice(0, 10)
          .map((transaction) => transaction.amount),
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
    responsive: true,
    maintainAspectRatio: false,
    // aspectRatio: 1,
    scales: {
      x: {
        labels: [
          allTransactions
            .slice(0, 10)
            .map((transaction) => formatDate(transaction.date))[0],
          "",
          "",
          "",
          "",
          "",
          allTransactions
            .slice(0, 10)
            .map((transaction) => formatDate(transaction.date))[
            allTransactions.slice(0, 10).length - 1
          ],
        ], // Showing the first and last labels only

        grid: {
          display: false,
        },
      },
      y: {
        // display: false,
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

  if (!pending && allTransactions.length > 0) {
    return <Line data={data} options={options} className="!w-full !h-full" />;
  }

  if (pending && allTransactions.length === 0) {
    return <ChartSkeleton />;
  }

  // if (allTransactions.length === 0) {
  //   return
  //  }
};

export default LineChart;
