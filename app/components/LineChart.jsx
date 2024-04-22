"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { fetchTransactions } from "@/actions";
import { formatDate } from "@/utils";

Chart.register(...registerables);

const LineChart = () => {
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/revenue/transactions-endpoint`);
        const data = await res.json();
        setAllTransactions(
          data.transactions.sort((a, b) => new Date(a.date) - new Date(b.date))
        );
        console.log(data.transactions);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // Sample data
  const data = {
    labels: allTransactions.slice(0, 10).map((transaction) => formatDate(transaction.date)),
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
        // labels: ["January", "", "", "", "", "", "July"], // Specify the labels to be shown

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

  return <Line data={data} options={options} className="!w-full !h-full" />;
};

export default LineChart;
