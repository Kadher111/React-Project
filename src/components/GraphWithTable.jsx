import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphWithTable = () => {
  const chartRef = useRef(null); // Reference to the chart instance

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Commits",
        data: [12, 19, 3, 5, 2, 3, 10],
        borderColor: "rgba(54, 162, 235, 1)", // Line color
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Fallback color
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
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
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const { ctx, chartArea } = chart;
      if (chartArea) {
        // Create a two-tone gradient
        const gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top
        );
        gradient.addColorStop(0, "rgba(54, 162, 235, 0.1)"); // Lighter tone at the bottom
        gradient.addColorStop(0.5, "rgba(54, 162, 235, 0.4)"); // Darker tone at the center

        // Dynamically set the gradient as the background color
        chart.data.datasets[0].backgroundColor = gradient;
        chart.update(); // Update the chart to apply the gradient
      }
    }
  }, []);

  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="text-lg font-semibold mb-4">Development Activity</h3>
      <div>
        <div className="h-48 bg-white rounded mb-4">
          {/* Chart component */}
          <Line ref={chartRef} data={data} options={options} />
        </div>
      </div>

      <table className="table-auto w-full text-left">
        <thead>
          <tr className="text-gray-600">
            <th className="py-2 px-4">User</th>
            <th className="py-2 px-4">Commit</th>
            <th className="py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              user: "Ronald Bradley",
              commit: "Initial commit",
              date: "May 6, 2018",
            },
            {
              user: "Russell Gibson",
              commit: "Main structure",
              date: "April 22, 2018",
            },
            {
              user: "Beverly Armstrong",
              commit: "Left sidebar adjustments",
              date: "April 15, 2018",
            },
          ].map((row, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{row.user}</td>
              <td className="py-2 px-4">{row.commit}</td>
              <td className="py-2 px-4">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GraphWithTable;
