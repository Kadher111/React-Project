import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// First Pie Chart (37% and 43%)
const PieChart1 = () => {
  const data = {
    labels: ["37%", "43%"], // Labels for the chart
    datasets: [
      {
        data: [37, 43], // Data values
        backgroundColor: ["#4caf50", "#dcdcdc"], // Chart colors
        hoverBackgroundColor: ["#388e3c", "#bcbcbc"], // Hover colors
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend for a cleaner look
      },
    },
  };

  return <Pie data={data} options={options} />;
};

// Second Pie Chart (9%, 10.5%, 33.1%, 47.4%)
const PieChart2 = () => {
  const data = {
    labels: ["9%", "10.5%", "33.1%", "47.4%"], // Labels for the chart
    datasets: [
      {
        data: [9, 10.5, 33.1, 47.4], // Data values
        backgroundColor: ["#1e88e5", "#29b6f6", "#90caf9", "#e0f7fa"], // Chart colors
        hoverBackgroundColor: ["#1565c0", "#0288d1", "#64b5f6", "#b2ebf2"], // Hover colors
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend for a cleaner look
      },
    },
  };

  return <Pie data={data} options={options} />;
};

// Component to display both charts
const DashboardCharts = () => (
  // <div className="flex justify-around p-6">
  //   <div className="w-40 h-40 flex flex-col items-center">
  //     <h4 className="text-center text-sm font-medium mb-2">Chart 1</h4>
  //     <PieChart1 />
  //   </div>
  //   <div className="w-40 h-40 flex flex-col items-center">
  //     <h4 className="text-center text-sm font-medium mb-2">Chart 2</h4>
  //     <PieChart2 />
  //   </div>
  // </div>
  <div className="grid grid-cols-2">
    <div>
      <PieChart1 />
    </div>
    <div>
      <PieChart2 />
    </div>
  </div>
);

export default DashboardCharts;
