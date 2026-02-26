import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function InsightGraph({ data, options }) {
  // Default circular chart data
  const defaultData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [86, 10], //completed,pending
        backgroundColor: ["#22c55e", "#ef4444"], // Green and Red
        borderWidth: 1,
      },
    ],
  };

  // Default options to keep it inside card
  const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { color: "white" } },
      tooltip: { enabled: true },
    },
  };

  return <Doughnut data={data || defaultData} options={options || defaultOptions} />;
}